var mongoose = require('mongoose');

var foundationSchema = mongoose.Schema({
  name: String,
  coverage: String,
  finish: [String],
  price: Number,
  brand: String,
  image: String,
  secondaryImages: [String],
  description: String
});

var Foundation = mongoose.model('Foundation', foundationSchema);

module.exports = Foundation;
