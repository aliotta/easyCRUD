import { EasyCrudClass } from "../../../src"; //TODO use build instead of src
import { Router } from "express";
import { MongoClient } from "mongodb";
import { ConditionModel } from "../models/ConditionModel";
export class ConditionRoutes extends EasyCrudClass {
    constructor(expressRouterInstance: Router, mongoClientInstance: MongoClient){
        const config = {
            schema: ConditionModel,
            dbConnectionInstance: mongoClientInstance,
            httpHandler: expressRouterInstance,
            routeName: 'condition',
            databaseType: 'mongodb'
        }
        super(config);
    }
}