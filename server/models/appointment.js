const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  tel: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  message: {
    type: String,
    required: true
  }
}, {collection: 'appointments'});

module.exports = mongoose.model('Appointment', appointmentSchema);