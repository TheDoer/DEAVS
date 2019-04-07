const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
carname: {
    type: String,
    required: true
  },
  cartype: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  numberplates: {
    type: String,
    required: true
  },
  yearofreg: {
    type: String
  },
  ownerid: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('crv', UserSchema);
