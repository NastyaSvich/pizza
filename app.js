var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Product = require('./restapi/models/productModel'),
  Order = require('./restapi/models/orderModel'),
  bodyParser = require('body-parser'),
  cors = require('cors');//mongodb://localhost/onlineСafe
//mongodb://Swooopi:swOOOpi6362@cluster0-shard-00-00.pqxdz.mongodb.net:27017,cluster0-shard-00-01.pqxdz.mongodb.net:27017,cluster0-shard-00-02.pqxdz.mongodb.net:27017/onlineСafe?ssl=true&replicaSet=atlas-txlopl-shard-0&authSource=admin&retryWrites=true&w=majority
mongoose.Promise = global.Promise; ///mongodb+srv://Swooopi:swOOOpi6362@cluster0.pqxdz.mongodb.net/onlineСafe?retryWrites=true&w=majority
mongoose.connect('mongodb://Swooopi:swOOOpi6362@cluster0-shard-00-00.pqxdz.mongodb.net:27017,cluster0-shard-00-01.pqxdz.mongodb.net:27017,cluster0-shard-00-02.pqxdz.mongodb.net:27017/onlineСafe?ssl=true&replicaSet=atlas-txlopl-shard-0&authSource=admin&retryWrites=true&w=majority', { useMongoClient: true });

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://Swooopi:swOOOpi6362@cluster0.pqxdz.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect;


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./restapi/routes/productRoutes');
var routesOrd = require('./restapi/routes/orderRoutes');
routes(app);
routesOrd(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Начинаем готовить пиццу :D -  Запуск на порту: ' + port);
