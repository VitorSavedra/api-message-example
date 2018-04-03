const express = require('express'),
    router = express.Router(),
    messagesController = require('./controllers/messages.controller');

// Exporta rota.
module.exports = router;

// Messages
router.get('/messages', messagesController.showMessages);
router.post('/messages', messagesController.newMessage);
// router.get('/produtos/criar', produtosController.exibeCriarProduto);
// router.get('/produtos/:slug/editar', produtosController.exibeEditarProduto);
// router.post('/produtos/:slug', produtosController.validaEditarProduto);
// router.get('/produtos/:slug/deletar', produtosController.deletaProduto);
// router.get('/produtos/:slug', produtosController.exibeProdutoUnico);