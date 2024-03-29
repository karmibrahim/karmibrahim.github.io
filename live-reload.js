var connect  = require('connect');
var static = require('serve-static');

var server = connect();

server.use(  static(__dirname));

server.listen(3000);

var livereload = require('livereload');
var lrserver = livereload.createServer();
lrserver.watch(__dirname);

console.log('Server running at http://localhost:3000/');