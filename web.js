var express = require('express');
var fs = require('fs');
var infile = "index.html";
var inf = fs.readFileSync(infile,'utf8');



var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 response.send(inf);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
