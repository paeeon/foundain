var express = require('express');
var router = express.Router();
var Foundation = require('./Foundation');

router.get('/foundations', function(req, res, next) {
  Foundation.find()
    .then(function(foundations) {
      res.status(200).send(foundations);
    }).catch(handleError);
});

router.get('/foundations/search?', function(req, res, next) {
  Foundation.find({name: new RegExp('.*'+(req.query.name)+'.*', 'i')})
    .then(function(foundations) {
      console.log('searching...')
      res.status(200).send(foundations);
    }).catch(handleError);
});

router.get('/foundation/:id', function(req, res, next) {
  Foundation.findById(req.params.id)
    .then(function(foundation) {
      res.status(200).send(foundation);
    }).catch(handleError);
});

function handleError(err) {
  console.log('error retrieving stuff!', err);
  throw err;
}

module.exports = router;
