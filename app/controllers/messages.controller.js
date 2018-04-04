const Message = require('../models/messages');

// Exporta funções.
module.exports = {
    showMessages: showMessages,
    newMessage: newMessage
};

// Exibe mensagens.
function showMessages(req, res) {
    Message.find({}, (err, messages) => {
        if (messages) {
            res.status(200);
            res.json(messages);
        } else {
            res.status(404);
        };
    });
};

// Cria nova mensagem.
function newMessage(req, res) {
    const message = new Message({
        user: req.body.user,
        datetime: Date.now(),
        message: req.body.message
    });

    // Salva mensagem.
    message.save((err) => {
        if (err)
            throw err;

        // Redireciona para todas mensagens.
        res.redirect(`/messages`);
    });
};