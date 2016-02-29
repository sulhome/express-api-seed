var express = require('express');
var bodyParser = require('body-parser');
var notesRoutes = require('./routes/notesRoutes');

var app = express();

notesRoutes.loadRoutes(app);

app.use(function(err,req,res,next){
    res.status(err.statusCode || 500).send(err);    
});

module.exports = app;