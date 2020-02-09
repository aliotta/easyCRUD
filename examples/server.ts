import express, { Express } from 'express';
import knex from 'knex';
import { knexConfig } from './config';
import { UserRoutes } from './UserRoutes';

export class Server {
    private expressInstance: Express;
    private knexClient: knex;
    constructor(){
        this.expressInstance = express();
        this.knexClient = knex(knexConfig);
        new UserRoutes(this.expressInstance, this.knexClient);
    }
}