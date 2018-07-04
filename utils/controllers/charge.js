var express = require('express')
  , router = express.Router()
  , body = require("../models/charges")
  , config = require("../../config/config")
  , http = require('../http');

// Perform a charge request and return the charge response
router.post('/charge', function(req, res) {
    
    body.charge.cardToken = req.body.cardToken;

    var options = {
        method: 'post',
        url: config.apiUrl,
        headers: {
            'authorization': process.env.KEY,
        },
        body: body.charge,
        json: true,
    };
    http.performRequest(req, res, options);
});

// Perform a 3D Secure charge request and return the charge response including the redirection URL
router.post('/charge3d', function(req, res) {
    
    body.charge3d.cardToken = req.body.cardToken;

    var options = {
        method: 'post',
        url: config.apiUrl,
        headers: {
            'authorization': process.env.KEY,
        },
        body: body.charge3d,
        json: true,
    };
    http.performRequest(req, res, options);
});

module.exports = router;