const express = require('express');
const cep_endereco = require('./middlewares/cep_endereco.js');
const app = express();
const port = 5000;

app.use(express.json())
//app.use(cep_endereco) // midlewarw de uso global

app.post("/barbearia", cep_endereco, (req, res) => {
    res.json(req.body)
})

app.get("/barbearia", (req, res) => {
    res.json(req.body)

})
    

app.listen(port, () => {
    console.log(`server running in ${port} port`)
})
