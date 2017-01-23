var express = require('express');
var router = express.Router();
var db = require('./db');

router.get('/foundations', function(req, res, next) {
  console.log('GET request for foundations');
  res.status(200).send('Foundations');
});

router.get('/foundations/:id', function(req, res, next) {
  console.log('GET request for specific foundation');
  res.status(200).send('A specific foundation');
})


module.exports = router;
