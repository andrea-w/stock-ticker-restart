var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({
    gameId: {
        type: Number,
        required: true,
        default: 0
    },
    gameName: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        default: Date.now,
        required: true
    },
    endTime: {
        type: Date
    },
    timeRemaining: {
        type: Date
    },
    digitalDice: {
        type: Boolean,
        required: true,
        default: false
    },
    players: {
        type: Array,
        items: {
            $ref: "player"
        }
    },
    broker: {
        type: {
            $ref: "player"
        }
    }
});

var Game = new mongoose.model('Game', gameSchema);
module.exports = Game;