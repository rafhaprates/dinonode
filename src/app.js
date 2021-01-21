const express = require('express')
const cors = require('cors')
const { erros } = require('celebrate')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
////app.use(erros())

module.exports = app