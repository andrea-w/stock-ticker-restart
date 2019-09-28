var mongoose = require('mongoose');

var tradeSchema = new mongoose.Schema({
    tradeId: {
        type: Number,
        required: true
    },
    playerId: {
        type: Number,
        required: true
    },
    stockName: {
        type: String,
        required: true
    },
    stockQuantity: {
        type: Number,
        required: true
    },
    stockPriceAtTrade: {
        type: Number,
        required: true
    },
    isPurchase: {
        type: Boolean,
        required: true,
        default: false
    },
    valueOfTrade: {
        type: Number,
        required: true
    }
});

var Trade = new mongoose.model('Trade', tradeSchema);
module.exports = Trade;