import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

import SocketController from './app/controllers/socketController';

class App {
    constructor() {
        this.app = express();
        this.server = createServer(this.app);
        this.httpConnection = createServer();
        this.socketHandler = new Server(this.server);
        this.middlewares();
        this.socketController = new SocketController(this.socketHandler);
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }
}

export default new App().server;
