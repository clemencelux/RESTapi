var express = require('express'),
    app = express(),
    port = process.env.PORT || 8888,
    mongoose = require('mongoose'),
    Task = require('./api/models/todolistModels.js'),
    bodyParser = require('body-parser');


    //mongoose connect url
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/Tododb', { useNewUrlParser: true } );


    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(bodyParser.json());

    var routes = require('./api/routes/todolistRoutes');
    routes(app);

    app.use(function(req, res) {
      res.status(404).send({url: req.originalUrl + ' not found'})
    });

    app.listen(port);

    console.log('todolist on' + port);
