import { EasyCrudClass } from "../../../src"; //TODO use build instead of src
import { Router } from "express";
import knex from "knex";
import { UserModel } from "../models/UserModel";
export class UserRoutes extends EasyCrudClass {
    constructor(expressRouterInstance: Router, knexClientInstance: knex){
        const config = {
            schema: UserModel,
            dbConnectionInstance: knexClientInstance,
            httpHandler: expressRouterInstance,
            routeName: 'user',
            databaseType: 'knex'
        }
        super(config);
    }
}