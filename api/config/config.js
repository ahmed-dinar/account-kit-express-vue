const Joi = require('joi');

// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string().allow(['development', 'production', 'test', 'provision']).default('development'),
  PORT: Joi.number().default(3030),
  URL: Joi.string().description('base url of server'),
  ACCOUNTKIT_APP_ID: Joi.string().required().description('accountkit app id'),
  ACCOUNTKIT_APP_SECRET: Joi.string().required().description('accountkit app id'),
  ACCOUNTKIT_VERSION: Joi.string().required().description('accountkit app secret')
})
.unknown()
.required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  url: envVars.URL,
  accountkit: {
    appId: envVars.ACCOUNTKIT_APP_ID,
    appSecret: envVars.ACCOUNTKIT_APP_SECRET,
    version: envVars.ACCOUNTKIT_VERSION
  }
};

module.exports = config;

