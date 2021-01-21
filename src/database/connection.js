const mssql = require('mssql')

module.exports = function(app) {
   conector = new mssql.connect({
        user : 'sa', 
        password : 'sasasa', 
        server : 'localhost', 
        database : 'node'
    })
}