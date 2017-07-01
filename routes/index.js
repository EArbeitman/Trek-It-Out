var express = require('express');
var router = express.Router();
var path   = require('path');

var User = require('../models/user');
var Tour = require('../models/Tour');

router.get('/', function(req,res) {
    res.sendFile(__dirname + "/public/index.html");
});

module.exports = router;