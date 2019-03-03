const express = require('express');
const expressWinston = require('express-winston');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');
const request  = require('request-promise');
const Tokens = require('csrf');
const Querystring = require('qs');
const config = require('./config');
const { winstonInstance } = require('./winston');

const debug = require('debug')('accountkit:app');

const app = express();

if (config.env === 'development') {
  app.use(logger('dev'));
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(compress());
app.use(methodOverride());
app.use(helmet());
app.use(cors({
  exposedHeaders: ['auth-key']
}));

if (config.env === 'development') {
  expressWinston.requestWhitelist.push('body');
  expressWinston.responseWhitelist.push('body');
  app.use(expressWinston.logger({
    winstonInstance,
    meta: true, 
    msg: "HTTP {{req.method}} {{req.url}}",
    colorize: true
  }));
}

app.use('/client', express.static('client'));

app.get('/api/otp/session', (req, res) => {
  const tokens = new Tokens();
  const secret = tokens.secretSync();
  const csrf = tokens.create(secret);

  res.json({
    appId: config.accountkit.appId,
    version: config.accountkit.version,
    csrf
  });
});

app.post('/api/otp/success', async (req, res, next) => {
  const appAccessToken = ['AA', config.accountkit.appId, config.accountkit.appSecret].join('|');
  const params = {
    grant_type: 'authorization_code',
    code: req.body.code,
    access_token: appAccessToken
  };
  const tokenExchangeBaseUrl = `https://graph.accountkit.com/${config.accountkit.version}/access_token`;
  const tokenExchangeUrl = `${tokenExchangeBaseUrl}?${Querystring.stringify(params, { encode: false })}`;

  try {
    const exchangeResponse = await request({
      method: 'GET',
      uri: tokenExchangeUrl,
      json: true
    });
    debug('exchangeResponse: ', exchangeResponse);

    const meEndpointBaseUrl = `https://graph.accountkit.com/${config.accountkit.version}/me`;
    const meEndpointUrl = `${meEndpointBaseUrl}?access_token=${exchangeResponse.access_token}`;

    const response = await request({
      method: 'GET',
      uri: meEndpointUrl,
      json: true
    });
    debug('response: ', response);

    const phone = response.phone.number;
    res.json({ phone });
  }
  catch (error) {
    next(error);
  }
});

app.use((req, res, next) => {
  const err = new Error('404 API or URL Not Found');
  return next(err);
});

if (config.env === 'development') {
  app.use(expressWinston.errorLogger({ winstonInstance }));
}

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  res.status(err.status || 404).json({
    message: err.message || err.status,
    stack: config.env === 'development' ? err.stack : {}
  });
});

module.exports = app;