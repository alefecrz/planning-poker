import SOCKET_EVENT from '../constants/sockerEvent';

class SocketController {
    constructor(handler) {
        this.socketHandler = handler;
        this.listen();
    }

    listen() {
        this.socketHandler.on(SOCKET_EVENT.CONNECT, socket => {
            console.log('New player connected!');

            socket.on(SOCKET_EVENT.DISCONNECT, () => {
                console.log('Player disconnected!');
            });

            socket.on(SOCKET_EVENT.SAY_HI, data => {
                console.log(`player says: ${data}`);

                this.socketHandler.sockets.emit(SOCKET_EVENT.SAY_HI, data);
                // socket.broadcast.emit(SOCKET_EVENT.SAY_HI, data.msg);
            });
        });
    }
}

export default SocketController;
