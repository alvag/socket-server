import { Socket } from 'socket.io';
import socketIO from 'socket.io';
import { UserList } from '../classes/user-list';
import { User } from '../classes/user';


export const usersConnected = new UserList();

export const clientConnect = ( client: Socket ) => {
	const user = new User(client.id);
	usersConnected.add(user);
};

export const disconnect = ( client: Socket ) => {
	client.on( 'disconnect', () => {
		// console.log( 'Cliente desconectado' );
		usersConnected.deleteUser(client.id);
	} );
};

export const message = ( client: Socket, io: socketIO.Server ) => {
	client.on( 'message', ( payload: any ) => {
		// console.log( payload );

		io.emit( 'new-message', payload );
	} );
};

export const configUser = ( client: Socket, io: socketIO.Server ) => {
	client.on( 'config-user', ( payload: any, callback: Function ) => {
		// console.log( payload );

		usersConnected.updateUserName(client.id, payload.name)

		callback( {
			ok: true,
			message: `Usuario ${payload.name}, configurado`
		} );
	} );
};
