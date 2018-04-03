const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Cria Schema de mensagem.
const messageSchema = new Schema({
    user: String,
    datetime: Date,
    message: String
});

// Cria modelo.
const messageModel = mongoose.model('Message', messageSchema);

// Exporta modelo.
module.exports = messageModel;