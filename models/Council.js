const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
surbub: {
    type: String,
    required: true
  },
  standnumber: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  nationalid: {
    type: String
  },
  ownerid: {
    type: String,
    required: true
  },
  datebought: {
    type: Date,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('council', UserSchema);
