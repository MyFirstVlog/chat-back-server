const {usuarioConectado, usuarioDesconectado, getUsuarios, grabarMensaje} = require("../controllers/sockets");
const { verificarJWT } = require("../helpers/jwt");


class Sockets {

    constructor( io ) {

      this.io = io;

      this.socketEvents();
    }

    socketEvents() {
        // On connection
      this.io.on('connection', async( socket ) => {

          const [valido,uid] = verificarJWT(socket.handshake.query['x-token']);

          if(!valido){
            console.log('socket no identificado');
            return socket.disconnect();
          }

          
          const user = await usuarioConectado(uid);
          console.log('cliente conectado', uid, user);

          //Unir a usuario a sala de soket.io
          socket.join(uid);
          //TODO Validar JWT
          //TODO Usuarios activos

          //TODO Emitir usuarios conectados

          this.io.emit('lista-usuarios', await getUsuarios());

          //TODO Socket.join
          //TODO Escuchar cuando cliente manda un mensaje
          socket.on('mensaje-personal', async (payload) => {
            const mensaje = await grabarMensaje(payload);
            this.io.to(payload.para).emit('mensaje-personal', mensaje); // Esto es para enviarle a la sala de chats que se creo con el uid
            this.io.to(payload.de).emit('mensaje-personal', mensaje); 
          })
          //TODO Disconnect en la base de datos flag

          socket.on('disconnect', async () => {
            const user = await usuarioDesconectado(uid);
            console.log('cliente desconectado', user)
            this.io.emit('lista-usuarios', await getUsuarios());
          })

      });
    }


}


module.exports = Sockets;