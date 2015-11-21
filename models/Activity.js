var mongoose = require('mongoose');

var ActivitySchema = new mongoose.Schema({
  name: String,
  host: String,
  location: String,
  capacity: Number,
  eventTime_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Activity', ActivitySchema);
