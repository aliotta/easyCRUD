import { EasyCrudTypes } from "../.."; //TODO use build instead of src
import knex from "knex";
export class KnexRepository implements EasyCrudTypes.DatabaseRepository {
    private knex: knex;
    public tableName: string;
    public schema: EasyCrudTypes.DatabaseSchema;
    constructor(knexClient: knex, schema: EasyCrudTypes.DatabaseSchema){
        this.knex = knexClient;
        this.schema = schema;
        this.tableName = schema.tableName;
    }

    async getAll(){
        try {
            const result = await this.knex<EasyCrudTypes.DatabaseObject>(this.tableName).select();
            return result;
        } catch (error) {
            console.error(`Error in userRepository getAll : ${error.message}`);
            throw error;
        }
    }

    async create(object: EasyCrudTypes.DatabaseObject){
        try {
            await this.knex<EasyCrudTypes.DatabaseObject>(this.tableName).insert(object);
            return object;
        } catch (error) {
            console.error(`Error in userRepository create: ${error.message}`);
            throw error;
        }
    }

    async deleteById(id: string){
        try {
            const result = await this.knex<EasyCrudTypes.DatabaseObject>(this.tableName).delete().where("id", id);
            return result;
        } catch (error) {
            console.error(`Error in userRepository create: ${error.message}`);
            throw error;
        }
    }

    async updateById(object: EasyCrudTypes.DatabaseObject, id: string){
        try {
            await this.knex<EasyCrudTypes.DatabaseObject>(this.tableName).update(object).where("id", id);
            return object;
        } catch (error) {
            console.error(`Error in userRepository create: ${error.message}`);
            throw error;
        }
    }

    async getById(id: string){
        try {
            const result = await this.knex<EasyCrudTypes.DatabaseObject>(this.tableName).first().where("id", id);
            return result;
        } catch (error) {
            console.error(`Error in userRepository create: ${error.message}`);
            throw error;
        }
    }
}