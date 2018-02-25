var express = require('express');
var proxy = require('http-proxy-middleware');
var proxyPort = 3000;

var app = express();

app.use('/api', proxy({
  target: 'http://localhost:9000',
  changeOrigin: true,
  logLevel: 'debug'
}));

app.use('/', proxy({
  target: 'http://localhost:4200',
  changeOrigin: false
}));

app.listen(proxyPort);
