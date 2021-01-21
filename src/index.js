const express = require('express')
const app = express()



app.get('/', (res, resp) => {
  return resp.json({message:'hello Word!'});

});

app.listen(3000);