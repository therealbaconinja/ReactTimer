//load web server app library
var express = require('express');

// Create our app
var app = express();
//works like var but value cannot be changed
const PORT = process.env.PORT || 3000;

//express middle ware
app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
