import { EasyCrudTypes } from "../.."; //TODO use build instead of src
import { MongoClient, Db, Collection, ObjectId } from 'mongodb';
export class MongoDbRepository implements EasyCrudTypes.DatabaseRepository {
    private mongodb: Db;
    public collectionName: string;
    public collection: Collection<EasyCrudTypes.DatabaseObject>;
    public schema: EasyCrudTypes.DatabaseSchema;
    constructor(mongodbClient: MongoClient, schema: EasyCrudTypes.DatabaseSchema){
        this.mongodb = mongodbClient.db(schema.tableName);
        this.schema = schema;
        this.collectionName = schema.tableName;
        this.collection = this.mongodb.collection(this.collectionName);
    }

    async getAll(){
        try {
            const result = await this.collection.find<EasyCrudTypes.DatabaseObject>({}).toArray();
            return result;
        } catch (error) {
            console.error(`Error in userRepository getAll : ${error.message}`);
            throw error;
        }
    }

    async create(object: EasyCrudTypes.DatabaseObject){
        try {
            await this.collection.insertOne(object);
            return object;
        } catch (error) {
            console.error(`Error in userRepository create: ${error.message}`);
            throw error;
        }
    }

    async deleteById(id: string){
        try {
            await this.collection.findOneAndDelete({_id: new ObjectId(id)});
            return 1; // one deleted
        } catch (error) {
            console.error(`Error in userRepository create: ${error.message}`);
            throw error;
        }
    }

    async updateById(object: EasyCrudTypes.DatabaseObject, id: string){
        try {
            await this.collection.findOneAndUpdate(
                {_id: new ObjectId(id)}, 
                {$set: object}
            );
            return object;

        } catch (error) {
            console.error(`Error in userRepository create: ${error.message}`);
            throw error;
        }
    }

    async getById(id: string){
        try {
            const result = await this.collection.findOne<EasyCrudTypes.DatabaseObject>({_id: new ObjectId(id)});
            return result || undefined; // don't return null
        } catch (error) {
            console.error(`Error in userRepository create: ${error.message}`);
            throw error;
        }
    }
}