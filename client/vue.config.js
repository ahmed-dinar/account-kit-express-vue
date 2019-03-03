module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/client/'
    : '/',
  
  outputDir: process.env.NODE_ENV === 'production'
    ? '../api/dist/'
    : '/'
}