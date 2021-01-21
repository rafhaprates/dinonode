const mssql = require('mssql')

module.exports = function(app) {
   conector = new mssql.connect({
        user : 'sa', 
        password : 'sasasa', 
        server : 'localhost', 
        database : 'mundial_editora',
        connectionLimit : 10,               // this is the max number of connections before your pool starts waiting for a release
        multipleStatements : true
    })

}