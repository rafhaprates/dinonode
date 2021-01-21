const express = require('express')
const RegisterController = require('./controllers/RegisterController') //Declarando o  Register Controller
const listController = require('./controllers/listController')// Declando o List Controller
const indexController = require('./controllers/indexController') //Declarando o index
const route = express.Router() //Instaciando o Objeto

//Rota Principal do Main
route.get('/', indexController.index);

//Adicionado a Rota de Register 
route.post('/register', RegisterController.index);

//Listar todos os usuarios 
route.get('/listUser/:id?', listController.index);

//Esportantdo a Rota 
module.exports = route