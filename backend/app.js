var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Product = require('./restapi/models/productModel'),
  bodyParser = require('body-parser'),
  cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/onlineСafe', { useMongoClient: true });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./restapi/routes/productRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Начинаем готовить пиццу :D -  Запуск на порту: ' + port);
