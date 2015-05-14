var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
	host: 'localhost',
	port: 3000
});

server.route({
	method: 'GET',
	path: '/{param*}',
	handler: {
		directory: {
			path: '.',
			listing: true
		}
	}
});

server.start(function() {
	server.log("Info", "Server running at: ", server.info.uri);
});