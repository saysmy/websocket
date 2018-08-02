const wsServer = require('ws').Server;
const wss = new wsServer({port: 8081});

console.log('node server.')

wss.on('connection', function(ws){
	console.log('client connected.')
	ws.on('message', function(message){
		console.log('reseived: %s', message)

		ws.send(message)
	})
})
