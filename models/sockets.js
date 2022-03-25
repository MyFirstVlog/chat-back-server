

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            //TODO Validar JWT
            //TODO Usuarios activos
            //TODO Emitir usuarios conectados
            //TODO Socket.join
            //TODO Escuchar cuando cliente manda un mensaje
            //TODO Disconnect en la base de datos flag

            
        
        });
    }


}


module.exports = Sockets;