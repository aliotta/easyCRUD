import { EasyCrudConfig, HttpHandler, DatabaseClient } from "../@types";
export class EasyCrudClass {
    private httpHandler: HttpHandler;
    private dbConnectionInstance: DatabaseClient;
    private dbRepository: any;
    constructor( config:EasyCrudConfig ) {
        this.httpHandler = config.httpHandler;
        this.dbConnectionInstance = config.dbConnectionInstance;
        this.exposeCrudRoutes();
    }

    exposeCrudRoutes(){
        this.httpHandler.get("/", (req, res) => {
            try {
                const result = await this.repository.getAll();
                if(result){
                    res.send();
                } else {
                    res.sendStatus(404);
                }
            } catch (error) {
                res.sendStatus(500);
            }
        });

        this.httpHandler.get("/:primary_key", (req, res) => {
            res.sendStatus(200);
        });

        this.httpHandler.delete("/:primary_key", (req, res) => {
            res.sendStatus(200);

        });

        this.httpHandler.put("/:primary_key", (req, res) => {
            res.sendStatus(200);
        });

        this.httpHandler.post("/:primary_key", (req, res) => {
            res.sendStatus(200);
        });
    }

}