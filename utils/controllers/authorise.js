var express = require('express')
  , router = express.Router()
  , body = require("../models/charges")
  , config = require("../../config/config")
  , http = require('../http');

// Perform an authorisation and return the charge response
router.post('/charge', function(req, res) {
    
    body.authorise.cardToken = req.body.cardToken;

    var options = {
        method: 'post',
        url: config.apiUrl,
        headers: {
            'authorization': process.env.KEY,
        },
        body: body.authorise,
        json: true,
    }
    http.performRequest(req, res, options);
});

// Perform a 3D Secure authorisation request and return the response including the redirection URL
router.post('/charge3d', function(req, res) {
    
    body.authorise3d.cardToken = req.body.cardToken;

    var options = {
        method: 'post',
        url: config.apiUrl,
        headers: {
            'authorization': process.env.KEY,
        },
        body: body.authorise3d,
        json: true,
    }
    http.performRequest(req, res, options);
    
});

module.exports = router;