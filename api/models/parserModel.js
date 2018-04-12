'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ArticlesSchema = new Schema({
  title: {type: String, required: true},
  link: {type: String, required: true},
  category: {type: String, required: true},
  article: {type: String, required: true},
  addedAt: {type: Date, required: true}
});

module.exports = mongoose.model('Articles', ArticlesSchema);