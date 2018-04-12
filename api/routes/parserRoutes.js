'use strict';

module.exports = function(app) {
  let parser = require('../controllers/parserController');

  app.route('/categories/:categoryName')
    .get(parser.getArticlesByCategoryName);
}