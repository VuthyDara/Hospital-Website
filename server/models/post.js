const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: false
  },
  specialty: {
    type: String,
    required: false
  }
}, {collection: 'posts'});

module.exports = mongoose.model('Post', postSchema);