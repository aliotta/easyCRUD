import { EasyCrudClass, EasyCrudTypes } from "../src"; //TODO use build instead of src
import { Router } from "express";
import { Client } from "knex";
import { UserModel } from "./UserModel";
class UserRoutes extends EasyCrudClass {
    constructor(expressRouterIntance: Router, knexClientInstance: Client){
        const config = {
            schema: UserModel,
            dbConnectionInstance: knexClientInstance,
            httpHandler: expressRouterIntance
        }
        super(config);
    }
}