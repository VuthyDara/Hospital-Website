const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require("path")
const routes = require('./routes/app_routes')

const app = express()
const port = 3000

try{
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    app.use(routes)
} catch(err) {
    console.log(err)
}


mongoose.connect('..')
.then(result => {
    console.log("Db is connected")
    app.listen(port)
}).catch(err => {
    console.log(err)
})