var express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use('/', require('./utils/controllers/charge'));
app.use('/', require('./utils/controllers/authorise'));

app.listen(port, function() {
  console.log('Listening on port '+port+'...')
})