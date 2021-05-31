const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  message: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  tel: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
}, {collection: 'feedbacks'});

module.exports = mongoose.model('Feedback', feedbackSchema);