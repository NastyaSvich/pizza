var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Product = require('./restapi/models/productModel'),
  Order = require('./restapi/models/orderModel'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  https = require('https'),
  http = require('http'),
  fs = require('fs');

mongoose.Promise = global.Promise; //mongodb://localhost/onlineСafe
mongoose.connect('mongodb://Swooopi:swOOOpi6362@cluster0-shard-00-00.pqxdz.mongodb.net:27017,cluster0-shard-00-01.pqxdz.mongodb.net:27017,cluster0-shard-00-02.pqxdz.mongodb.net:27017/onlineСafe?ssl=true&replicaSet=atlas-txlopl-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true });

app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./restapi/routes/productRoutes');
var routesOrd = require('./restapi/routes/orderRoutes');
routes(app);
routesOrd(app);

// This line is from the Node.js HTTPS documentation.
var options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

// Create an HTTP service.
http.createServer(app).listen(80);
// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(3000);

console.log('Начинаем готовить пиццу :D -  Запуск на порту: 3000');
