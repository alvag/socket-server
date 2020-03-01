import express from 'express';

export default class Server {

	public app: express.Application;
	public port: number;

	constructor() {
		this.app = express();
		this.port = Number(process.env.SERVER_PORT || 3000);
	}

	start(callback: Function) {
		this.app.listen(this.port, callback);
	}

}


