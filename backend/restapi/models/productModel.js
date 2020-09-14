'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Schema = new Schema({

  articul: { type: String, Required:  'Product name cannot be left blank.' },

  name: { type: String, Required:  'Product name cannot be left blank.' },

  description: { type: String, Required:  'Product name cannot be left blank.' },

  price: { type: Number,     Required:  'Product price cannot be left blank.'},

  img: { type: String,     Required:  'Product price cannot be left blank.'},

  category: { type: String ,    Required:  'Product category cannot be left blank'}

});

module.exports = mongoose.model('Products', Schema);
