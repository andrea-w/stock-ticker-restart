var mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
    playerId: {
        type: Number,
        required: true,
        default: 0
    },
    username: {
        type: String,
        required: true
    },
    isBroker: {
        type: Boolean,
        required: true,
        default: false
    },
    tradeHistory: {
        type: Array,
        items: {
            $ref: "trade"
        }
    },
    portfolio: {
        type: {
            $ref: "portfolio"
        }
    }
});

var Player = mongoose.model('Player', playerSchema);
module.exports = Player;