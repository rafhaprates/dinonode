const { request } = require('../app')
const connectionVar = require('../database/connection')

 const RegisterController = {
    index:  function(req,res){
      var connection = connectionVar();
      console.log("Conectou");
      res.status(202).json({ message: 'Hello Word'});
     // request.query('select * from Clientes', function (err, results){
      //  res.send({home : results});
     // });
     // connection.close();

    }
 }

 module.exports = RegisterController;
