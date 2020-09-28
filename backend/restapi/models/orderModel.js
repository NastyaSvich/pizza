'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SchemaOrd = new Schema({

  articul: { type: String, Required:  'Product name cannot be left blank.' },

  name: { type: String, Required:  'Product name cannot be left blank.' },

  surname: { type: String, Required:  'Product name cannot be left blank.' },

  tel: { type: String , Required:  'Product category cannot be left blank'},

  type: { type: Number, Required:  'Product category cannot be left blank'},

  priceAll: { type: Number, Required:  'Product price cannot be left blank.'},

  price: { type: Array, Required:  'Product price cannot be left blank.'},

  namePizza: { type: Array, Required:  'Product price cannot be left blank.'},

  counts: { type: Array, Required:  'Product price cannot be left blank.'}

});

module.exports = mongoose.model('Orders', SchemaOrd);
