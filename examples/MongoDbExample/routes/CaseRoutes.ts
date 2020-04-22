import { EasyCrudClass } from "../../../src"; //TODO use build instead of src
import { Router } from "express";
import { MongoClient } from "mongodb";
import { CaseModel } from "../models/CaseModel";
export class CaseRoutes extends EasyCrudClass {
    constructor(expressRouterInstance: Router, mongoClientInstance: MongoClient){
        const config = {
            schema: CaseModel,
            dbConnectionInstance: mongoClientInstance,
            httpHandler: expressRouterInstance,
            routeName: 'case',
            databaseType: 'mongodb'
        }
        super(config);
    }
}