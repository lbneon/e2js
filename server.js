#!/bin/env node

var express = require('express'),
    app = express();
//    app = express.createServer();

//Get the environment variables we need.
var ipaddr  = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || process.env.OPENSHIFT_INTERNAL_IP || "127.0.0.1";
var port    = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT ||  process.env.OPENSHIFT_INTERNAL_PORT || 8080;

app.use(express.logger());
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
    res.send('Hello World!');
});

app.get('/game', function(req, res){
    res.render('ejsa/index.html')
});

app.get('*', function(req, res){
    res.render('404.html', {
        title: 'No Found'
    })
});

app.listen(port,ipaddr);
//console.log('Express server started on port %s', app.address().port);