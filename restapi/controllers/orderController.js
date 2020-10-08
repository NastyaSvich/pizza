'use strict';

var mongoose = require('mongoose'),
    Order = mongoose.model('Orders');

exports.products = function(req, res) {
  Order.find({}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.add = function(req, res) {
  var new_product = new Order(req.body);
  new_product.save(function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.getproduct = function(req, res) {
  Order.find({articul: req.query.articul}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.update = function(req, res) {
  var articul = req.query.articul;
  Order.findOneAndUpdate({articul: articul}, req.body, {new: true}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.delete = function(req, res) {
  var articul = req.query.articul;
  Order.remove({
    articul: articul
  }, function(err, product) {
    if (err)
      res.send(err);
    res.json({ message: 'Product deleted successfully' });
  });
};
