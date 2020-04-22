import express, { Express } from "express";
import knex from "knex";
import { knexConfig } from "./config/config";
import { UserRoutes } from "./routes/UserRoutes";
import bodyParser from "body-parser";
const PORT = 3000;

export class Server {
    private expressInstance: Express;
    private knexClient: knex;
    constructor(){
        this.expressInstance = express();
        this.expressInstance.use(bodyParser.json());
        this.expressInstance.use(bodyParser.urlencoded({ extended: false }));
        this.knexClient = knex(knexConfig);
        new UserRoutes(this.expressInstance, this.knexClient);
        this.expressInstance.listen(PORT);
    }
}

new Server();