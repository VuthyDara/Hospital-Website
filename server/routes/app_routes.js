const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')
const feedbackController = require('../controllers/feedbackController')

router.get('/', (req, res) => {
  res.json({
    "message" : "welcome",
    "appName" : "Social Media",
    "version" : "0.0.1"
  })
})

router.get('/posts', postController.getPosts);
router.post('/posts', postController.createPost);

router.get('/feedbacks', feedbackController.getFeedbacks);
router.post('/feedbacks', feedbackController.createFeedback);

module.exports = router