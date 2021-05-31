const feedback = require('../models/feedback');
const Feedback = require('../models/feedback');

exports.getFeedbacks = (req, res) => {
  Feedback.find()
  .then(feedbacks => {
    res.json({ data: feedbacks });
  })
  .catch(err => {
    console.log(err);
  })
}

exports.createFeedback = (req, res) => {
  // console.log(req.body)
  const feedback = new Feedback({
    message: req.body.message,
    name: req.body.name,
    tel: req.body.tel,
    nationality: req.body.nationality,
    email: req.body.email
  })
  feedback.save().then(result => {
    console.log('Feedback sent')
    res.json({ "message": "New feedback was sent.", "data": result });
  }).catch(err => {
    console.log(err);
  })
}