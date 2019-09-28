var express = require('express');
var router = express.router();
var helpers = require('../helpers/players');

router.route('/')
    .get(helpers.getPlayers)
    .post(helpers.createPlayer)

router.route('/:playerId')
    .get(helpers.getPlayer)
    .put(helpers.updatePlayer)
    .delete(helpers.deletePlayer)

module.exports = router;