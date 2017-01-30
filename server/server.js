var express = require('express');
var app = express();
var db = require('./db');
var router = require('./router');
var allowCrossDomain = require('./allowCrossDomain');

app.listen(3000, function() {
  console.log("Listening on port 3000");
});

app.use(allowCrossDomain);

app.use('/', router);

module.exports = app;
