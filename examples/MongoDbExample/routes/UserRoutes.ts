import { EasyCrudClass } from "../../../src"; //TODO use build instead of src
import { Router } from "express";
import { MongoClient } from "mongodb";
import { UserModel } from "../models/UserModel";
export class UserRoutes extends EasyCrudClass {
    constructor(expressRouterInstance: Router, mongoClientInstance: MongoClient){
        const config = {
            schema: UserModel,
            dbConnectionInstance: mongoClientInstance,
            httpHandler: expressRouterInstance,
            routeName: 'user',
            databaseType: 'mongodb'
        }
        super(config);
    }
}