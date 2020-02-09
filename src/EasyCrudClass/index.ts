import { EasyCrudConfig, HttpHandler, DatabaseClient, DatabaseRepository } from "../@types";
import { KnexRepository } from "../KnexRepository";
export class EasyCrudClass {
    private httpHandler: HttpHandler;
    private dbConnectionInstance: DatabaseClient;
    private dbRepository: DatabaseRepository;
    constructor( config:EasyCrudConfig ) {
        this.httpHandler = config.httpHandler;
        this.dbConnectionInstance = config.dbConnectionInstance;
        this.dbRepository = new KnexRepository(this.dbConnectionInstance, config.schema);
        this.exposeCrudRoutes();
    }

    exposeCrudRoutes(){
        this.httpHandler.get("/", async (req, res) => {
            try {
                const result = await this.dbRepository.getAll();
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

        this.httpHandler.post("/", async (req, res) => {
            try {
                const result = await this.dbRepository.create(req.body.object);
                if(result){
                    res.send();
                } else {
                    res.sendStatus(404);
                }
            } catch (error) {
                res.sendStatus(500);
            }
        });
    }

}