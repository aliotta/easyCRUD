import express, { Express } from 'express';
import knex from 'knex';
import { knexConfig } from './config/config';
import { UserRoutes } from './routes/UserRoutes';
const PORT = 3000;

export class Server {
    private expressInstance: Express;
    private knexClient: knex;
    constructor(){
        this.expressInstance = express();
        this.knexClient = knex(knexConfig);
        new UserRoutes(this.expressInstance, this.knexClient);
        this.expressInstance.listen(PORT);
    }
}

new Server();