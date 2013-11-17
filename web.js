#!/bin/env node
//Load sample Node application
var http = require('http');
var url = require('url');
var fs = require('fs');

//Get the environment variables we need.
var ipaddr  = process.env.IP   || "127.0.0.1";
var port    = process.env.PORT || 5000;

http.createServer(function (req, res) { // request and response
	var addr = "unknown";
	var out = "";
	if (req.headers.hasOwnProperty('x-forwarded-for')) {
		addr = req.headers['x-forwarded-for'];
	} else if (req.headers.hasOwnProperty('remote-addr')){
		addr = req.headers['remote-addr'];
	}

	if (req.headers.hasOwnProperty('accept')) {
		if (req.headers['accept'].toLowerCase() == "application/json") {
			  res.writeHead(200, {'Content-Type': 'application/json'});
			  res.end(JSON.stringify({'ip': addr}, null, 4) + "\n");			
			  return ;
		}
	}
	
	var pathname = url.parse(req.url).pathname
	if(pathname == "/game") {
	    fs.readFile('./ejsa/index.html', 'utf-8',function (err, data) {//read cotent
                    if (err) throw err;
                    res.writeHead(200, {
                        "Content-Type": "text/html"
                    });
                    res.write(data);
                    res.end();
                });
	} else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write("Welcome to Node.js on OpenShift!\n\n");
        res.end("Your IP address seems to be " + addr + "\n");
	}
}).listen(port, ipaddr);

console.log("Server running at http://" + ipaddr + ":" + port + "/");
