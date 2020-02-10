import { EasyCrudConfig, HttpHandler, DatabaseClient, DatabaseRepository } from "../@types";
import { KnexRepository } from "../DatabaseRepositories/KnexRepository";
export class EasyCrudClass {
    private httpHandler: HttpHandler;
    private dbConnectionInstance: DatabaseClient;
    private dbRepository: DatabaseRepository;
    private config: EasyCrudConfig;
    constructor( config:EasyCrudConfig ) {
        this.config = config;
        this.httpHandler = config.httpHandler;
        this.dbConnectionInstance = config.dbConnectionInstance;
        this.dbRepository = new KnexRepository(this.dbConnectionInstance, config.schema);
        this.exposeCrudRoutes();
    }

    exposeCrudRoutes(){
        this.httpHandler.get(`/${this.config.routeName}`, async (req, res) => {
            try {
                const result = await this.dbRepository.getAll();
                if(result){
                    res.send(result);
                } else {
                    res.sendStatus(404);
                }
            } catch (error) {
                res.sendStatus(500);
            }
        });

        this.httpHandler.get(`/${this.config.routeName}/:primary_key`, (req, res) => {
            res.sendStatus(200);
        });

        this.httpHandler.delete(`/${this.config.routeName}/:primary_key`, (req, res) => {
            res.sendStatus(200);

        });

        this.httpHandler.put(`/${this.config.routeName}/:primary_key`, (req, res) => {
            res.sendStatus(200);
        });

        this.httpHandler.post(`/${this.config.routeName}`, async (req, res) => {
            try {
                const result = await this.dbRepository.create(req.body);
                if(result){
                    res.send(result);
                } else {
                    res.sendStatus(404);
                }
            } catch (error) {
                res.sendStatus(500);
            }
        });
    }

}