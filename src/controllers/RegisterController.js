const sql = require('mssql')

const connStr = "Server=localhost;Database=node;User=sa;Password=sasasa";


sql.connect(connStr)
    .then(conn => console.log("Conectou" + conn))
    .catch(err => console.log("Erro!" + err))