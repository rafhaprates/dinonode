const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res ) => {
    res.send('Hello Word! Olá mundão');
    //Só pode enviar a resposta 1 vez, não pode também de deixar de enviar 

})
app.get('/contatos', (req, res ) => {
    res.send('<h1>bem vindo a pagina de contato</h1>');
    //Só pode enviar a resposta 1 vez, não pode também de deixar de enviar 
    
})

app.listen(port, () =>  {
    console.log(`Exemplo de app rodando na porta http://localhost:${port}`)
})