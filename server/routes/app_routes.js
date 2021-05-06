const express = require('express')
const router = express.Router()
const appController = require('../hospital/server/controllers/appController')

router.get('/', (req, res) => {
    res.json({"message": "Welcome"})
})

module.exports = router