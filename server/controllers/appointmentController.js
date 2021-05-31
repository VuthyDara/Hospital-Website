const appointment = require('../models/appointment');
const Appointment = require('../models/appointment');

exports.getAppointments = (req, res) => {
  Appointment.find()
  .then(appointments => {
    res.json({ data: appointments });
  })
  .catch(err => {
    console.log(err);
  })
}

exports.createAppointment = (req, res) => {
  // console.log(req.body)
  const appointment = new Appointment({
    message: req.body.message,
    name: req.body.name,
    tel: req.body.tel,
    date: req.body.date,
    email: req.body.email
  })
  appointment.save().then(result => {
    console.log('Appointment sent')
    res.json({ "message": "New appointment was sent.", "data": result });
  }).catch(err => {
    console.log(err);
  })
}