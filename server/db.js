var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/foundain');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  // connected!
});

module.exports = db;
