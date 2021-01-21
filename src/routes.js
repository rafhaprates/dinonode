const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')


const RegisterController = require('./controllers/RegisterController')

const route = express.Router()


route.get('/', (req, res) => {
    res.status(202).json({ message: 'Hello Word'});
});

//routes.get('/register', RegisterController.index );

module.exports = route