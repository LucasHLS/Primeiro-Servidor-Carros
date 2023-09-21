const express = require('express');
const { listagemCarros, obterCarro } = require('./src/controladores/carros')

const app = express();

app.get('/carros', listagemCarros);
app.get('/carros/:id', obterCarro);
app.listen(3000);