import { EasyCrudClass } from "../../src"; //TODO use build instead of src
import { Router } from "express";
import knex from "knex";
import { UserModel } from "../../examples/models/UserModel";
export class UserRoutes extends EasyCrudClass {
    constructor(expressRouterIntance: Router, knexClientInstance: knex){
        const config = {
            schema: UserModel,
            dbConnectionInstance: knexClientInstance,
            httpHandler: expressRouterIntance,
            routeName: 'user'
        }
        super(config);
    }
}