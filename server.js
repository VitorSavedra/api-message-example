// Carrega variáveis de ambiente.
require('dotenv').config();

// Carrega dependências.
const express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

// Permite os requests parsearem JSON
app.use(bodyParser.json());

// Conecta com o banco de dados.
mongoose.connect(process.env.DB_URI, { useMongoClient: true });

// Define rotas.
app.use(require('./app/routes'));

// Inicia servidor.
app.listen(port, () => {
    console.log(`Servidor executando em http://localhost:${port}.`);
});

module.exports = app;