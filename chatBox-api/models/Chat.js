const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const Chat = mongoose.model('Chat', ChatSchema);

module.exports = Chat;