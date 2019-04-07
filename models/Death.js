const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  deacesedname: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  nationalid: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  maritalstatus: {
    type: String,
    required: true
  },
  socialsecurity: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('death', UserSchema);
