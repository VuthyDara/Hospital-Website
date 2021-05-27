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
  }
}, {collection: 'posts'});

module.exports = mongoose.model('Post', postSchema);