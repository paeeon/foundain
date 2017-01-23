var express = require('express');
var app = express();
var router = require('./router');

app.listen(3000, function() {
  console.log("Listening on port 3000");
});

app.use('/', router);

module.exports = app;
