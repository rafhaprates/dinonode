const { request } = require('../app')
const connectionVar = require('../database/connection')

module.exports = function(app) {

app.get('/register', function (req, res) {
    var connection = connectionVar();
    console.log("Conectou");

    request.query('select * from Clientes', function (err, results){
      res.send({home : results});
    });
    connection.close();
});

}