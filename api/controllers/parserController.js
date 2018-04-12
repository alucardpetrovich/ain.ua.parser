'use strict';

let mongoose = require('mongoose'),
  jsdom = require('jsdom'),
  {JSDOM} = jsdom,
  Articles = mongoose.model('Articles');

exports.getArticlesByCategoryName = (req, res) => {
  
}