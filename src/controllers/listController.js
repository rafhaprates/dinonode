const { request } = require('../app');
const connectionVar = require('../database/connection')

 const listController = {
    index:  function(req,res){
    
      // request.query('select * from Clientes', function (err, results){
      //  res.send({home : results});
     // });
     // connection.close();

    }
 }

 module.exports = listController;