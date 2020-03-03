import { Socket } from 'socket.io';
import socketIO from 'socket.io'

export const disconnect = ( client: Socket ) => {
	client.on( 'disconnect', () => {
		console.log( 'Cliente desconectado' );
	} );
};

export const message = ( client: Socket, io: socketIO.Server ) => {
	client.on('message', (payload: any) => {
		console.log(payload);

		io.emit('new-message', payload);
	});
};

export const configUser = ( client: Socket, io: socketIO.Server ) => {
	client.on('config-user', (payload: any, callback: Function) => {
		console.log(payload);

		callback({
			ok: true,
			message: `Usuario ${payload.name}, configurado`
		});
	});
};
