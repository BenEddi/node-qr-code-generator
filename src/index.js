const serverPort = 7777
var express = require('express');
var bodyParser  = require('body-parser');
var qrcode = require('yaqrcode');
var app = express();

app.use(bodyParser.json());

// fix cors issues
var cors = require('cors')
app.use(cors());


// ENDPOINTS

app.get('/', function (req, res) {
  res.send('This is a QR generator API, to generate a qr code use the following endpoint: /qr');
});

/**
 * Generate qr codes from a list of strings (a qr code for each string)
 */
app.post('/qr', function (req, res) {
  
  if(!req.body.items) {
    return res.json({
      code: 400,
      message: 'Malfofrmed request.'
    })
  }

  let result = req.body.items.map(e => ({
    item: e,
    qr: qrcode(e), 
  }))

  res.json(result);
});


// Running the server
app.listen(serverPort, function () {
  console.log('Server is listening on port : '+ serverPort);
});
