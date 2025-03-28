const expressNew = require('express')
const serverApp = expressNew()
const port = 3333

serverApp.get('/primeiraApi', (requesicao,resposta)=>{
    resposta.send('Varmeiras caiu')
})

serverApp.listen(port, () =>{
    console.log('server está funcionando!')
})