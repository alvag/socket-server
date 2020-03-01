import express from 'express';
import socketIO from 'socket.io'
import http from 'http';

export default class Server {

	public app: express.Application;
	public port: number;
	public io: socketIO.Server;
	private httpServer: http.Server;

	constructor() {
		this.app = express();
		this.port = Number(process.env.SERVER_PORT || 3000);

		this.httpServer = new http.Server(this.app);

		this.io = socketIO(this.httpServer);
	}

	start(callback: () => void) {
		this.httpServer.listen(this.port, callback);
	}

	private listenSockets() {
		this.io.on('connection', client => {
			console.log('Cliente conectado');
		})
	}

}


