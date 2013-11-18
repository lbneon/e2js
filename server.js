
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

//var app = express();
var app = express.createServer();

//var port    = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080); app.set('ipaddr', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");

// Configuration

////app.configure(function(){
////  app.set('views', __dirname + '/views');
////  app.set('view engine', 'jade');
////  app.use(express.bodyParser());
////  app.use(express.methodOverride());
////  app.use(app.router);
////  app.use(express.static(__dirname + '/public'));
////});
////
////app.configure('development', function(){
////  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
////});
////
////app.configure('production', function(){
////  app.use(express.errorHandler());
////});

app.use(express.logger());

// Routes

//app.get('/', routes.index);
app.get('/', function(req, res){
    res.send('Hello World');
});


app.listen(port);
//console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
console.log('Express server started on port %s', process.env.PORT);