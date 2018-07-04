var request = require('request-promise');
module.exports = {
    performRequest: function (req, res, options) {
        request(options)
            .then(function (response) {
                res.send(response);
            })
            .catch(function (err) {
                res.send(err.error);
            });
    }
};