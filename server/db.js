var mongoose = require('mongoose');
var Foundation = require('./Foundation.js');
var seedFoundations = require('./seed');
mongoose.connect('mongodb://localhost/foundain');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  // connected!
  console.log('database connected!');
  Foundation.find({})
    .then(function(results) {
      if (!results.length) return seedFoundations()
        .then(function(seeded) {
          console.log('seeded the database!');
          console.log(seeded);
        });
    }).catch(function(err) {
      console.error('There was an error seeding the database', err);
    })
});

module.exports = db;
