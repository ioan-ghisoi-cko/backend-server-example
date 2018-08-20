var express = require("express"),
  app = express(),
  http = require("http"),
  server = http.createServer(app);
var rp = require('request-promise');

var port = process.env.PORT || 8000;

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.post('/csv', function (req, res) {
  var options = {
    method: 'get',
    json: true,
    url: "https://api.checkout.com/reconciliation/transactions/download?from=" + req.body.startDate + "&to=" + req.body.endDate,
    headers: {
      'authorization': req.body.key,
    }
  }

  rp(options)
    .then(function (response) {
      try {
        // console.log(response);
        res.setHeader('Content-disposition', 'attachment; filename=testing.csv');
        res.set('Content-Type', 'text/csv');
        res.status(200).send(response);
      } catch (err) {
        console.log(err);
      }
    })
    .catch(function (err) {
      res.send(err.error);
    });
});

app.post('/balance', function (req, res) {
  var options = {
    method: 'get',
    json: true,
    url: "https://api.checkout.com/reconciliation/balance?from=" + req.body.startDate + "&to=" + req.body.endDate,
    headers: {
      'authorization': req.body.key,
    }
  }

  rp(options)
    .then(function (response) {
      try {
        console.log(response);
        res.status(200).send(response);
      } catch (err) {
        console.log(err);
      }
    })
    .catch(function (err) {
      res.send(err.error);
    });
});

server.listen(port, function () {
  console.log('Listening on port ' + port + '...')
})