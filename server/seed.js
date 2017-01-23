var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Foundation = require('./Foundation');

var ultraHD = new Foundation({
  name: "Ultra HD Invisible Cover Foundation",
  coverage: "buildable",
  finish: "natural",
  price: 43,
  brand: "Make Up For Ever"
});

ultraHD.save()
  .then(function(saved) {
    console.log("ultra HD saved!")
  });
