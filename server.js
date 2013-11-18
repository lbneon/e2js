#!/bin/env node

var express = require('express'),
    app = express.createServer();

//Get the environment variables we need.
var ipaddr  = process.env.OPENSHIFT_NODEJS_IP || process.env.OPENSHIFT_INTERNAL_IP || "127.0.0.1";
var port    = process.env.OPENSHIFT_NODEJS_PORT ||  process.env.OPENSHIFT_INTERNAL_PORT || 8080;

app.use(express.logger());

app.get('/', function(req, res){
    res.send('Hello World!');
});

app.listen(port,ipaddr);
//console.log('Express server started on port %s', app.address().port);