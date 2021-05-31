const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')
const feedbackController = require('../controllers/feedbackController')
const appointmentController = require('../controllers/appointmentController')

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

router.get('/appointments', appointmentController.getAppointments);
router.post('/appointments', appointmentController.createAppointment);

module.exports = router