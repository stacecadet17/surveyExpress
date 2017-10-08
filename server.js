var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded(true));


app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var routes = require('./routes/routes.js');
routes(app);

app.listen(8000, function(){
  console.log('app running on port 8000 express survey');
})
