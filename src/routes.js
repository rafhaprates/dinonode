const express = require('express')
const RegisterController = require('./controllers/RegisterController') //Declarando o  Register Controller
const indexController = require('./controllers/indexController') //Declarando o index
const route = express.Router() //Instaciando o Objeto

//Rota Principal do Main
route.get('/', indexController.index);

//Adicionado a Rota de Register 
route.get('/register', RegisterController.index);


//Esportantdo a Rota 
module.exports = route