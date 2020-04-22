import { EasyCrudConfig, HttpHandler, DatabaseClient, DatabaseRepository } from "../@types";
import { KnexRepository } from "../DatabaseRepositories/KnexRepository";
import { MongoDbRepository } from "../DatabaseRepositories/MongoDb";
import { MongoClient } from "mongodb";
import knex from "knex";
export class EasyCrudClass {
    private httpHandler: HttpHandler;
    private dbConnectionInstance: DatabaseClient;
    private dbRepository: DatabaseRepository;
    private config: EasyCrudConfig;
    constructor( config:EasyCrudConfig ) {
        this.config = config;
        this.httpHandler = config.httpHandler;
        this.dbConnectionInstance = config.dbConnectionInstance;
        if(config.databaseType === 'mongodb'){
            this.dbRepository = new MongoDbRepository(this.dbConnectionInstance as MongoClient, config.schema);

        } else {
            this.dbRepository = new KnexRepository(this.dbConnectionInstance as knex, config.schema);
        }
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

        this.httpHandler.get(`/${this.config.routeName}/:id`, async (req, res) => {
            try {
                const result = await this.dbRepository.getById(req.params.id);
                if(result){
                    res.send(result);
                } else {
                    res.sendStatus(404);
                }
            } catch (error) {
                res.sendStatus(500);
            }
        });

        this.httpHandler.delete(`/${this.config.routeName}/:id`, async (req, res) => {
            try {
                const result = await this.dbRepository.deleteById(req.params.id);
                if(result){
                    res.sendStatus(200);
                } else {
                    res.sendStatus(404);
                }
            } catch (error) {
                res.sendStatus(500);
            }

        });

        this.httpHandler.put(`/${this.config.routeName}/:id`, async (req, res) => {
            try {
                const result = await this.dbRepository.updateById(req.body, req.params.id);
                if(result){
                    res.send(result);
                } else {
                    res.sendStatus(404);
                }
            } catch (error) {
                res.sendStatus(500);
            }
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