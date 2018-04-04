const express = require('express'),
    router = express.Router(),
    messagesController = require('./controllers/messages.controller');

// Exporta rota.
module.exports = router;

// Messages
router.get('/messages', messagesController.showMessages);
router.post('/messages', messagesController.newMessage);