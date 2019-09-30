var db = require('../models');

exports.getTrades = function(req, res) {
    db.Trades.find()
        .then(function(trades) {
            res.json(trades);
        })
        .catch(function(err) {
            res.send(err);
        });
}

exports.createTrade = function(req, res) {
    db.Trades.create(req.body)
        .then(function(newTrade) {
            res.status(201).json(newTrade);
        })
        .catch(function(err) {
            res.send(err);
        });
}

exports.getTrade = function(req, res) {
    db.Trades.findById(req.params.tradeId)
        .then(function(foundTrade) {
            res.json(foundTrade);
        })
        .catch(function(err) {
            res.send(err);
        });
}

module.exports = exports;