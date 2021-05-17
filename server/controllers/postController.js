const post = require('../models/post');
const Post = require('../models/post');

exports.getPosts = (req, res) => {
  Post.find()
  .then(posts => {
    res.json({ data: posts });
  })
  .catch(err => {
    console.log(err);
  })
}

exports.createPost = (req, res) => {
  // console.log(req.body)
  const post = new Post({
    content: req.body.content,
    postedAt: new Date().toISOString()
  })
  post.save().then(result => {
    console.log('post created')
    res.json({ "message": "New post was created.", "data": result });
  }).catch(err => {
    console.log(err);
  })
}