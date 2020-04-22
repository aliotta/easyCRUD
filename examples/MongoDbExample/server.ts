import express, { Express } from "express";
import { MongoClient } from "mongodb";
import { UserRoutes } from "./routes/UserRoutes";
import { ConditionRoutes } from "./routes/ConditionRoutes";
import { CaseRoutes } from "./routes/CaseRoutes";
import { mongoConfig } from "./config";
import bodyParser from "body-parser";
const PORT = 3000;

export class Server {
    private expressInstance: Express;
    constructor(){
        this.expressInstance = express();
        this.expressInstance.use(bodyParser.json());
        this.expressInstance.use(bodyParser.urlencoded({ extended: false }));
        MongoClient.connect(mongoConfig.url, (err, client)=>{
            if(err){
                throw err;
            }
            new UserRoutes(this.expressInstance, client);
            new ConditionRoutes(this.expressInstance, client);
            new CaseRoutes(this.expressInstance, client);
            this.expressInstance.listen(PORT);
            console.log(`Express listening on Port ${PORT}`);
        });
    }
}

new Server();