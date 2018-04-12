const express = require('express'),
  app = express(),
  port = process.env.PORT || 8080;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Articledb')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


let routes = require('./api/routes/parserRoutes');
routes(app);

app.listen(port);

console.log('parser RESTful API server started on: ' + port);