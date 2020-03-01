require( 'dotenv' ).config();
import router from './routes/router';
import Server from './classes/server';


const server = new Server();

server.app.use('/api', router);

server.start( () => {
	console.log( `Servidor corriendo en el pueto ${server.port}` );
} );
