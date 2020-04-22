import {  Router } from 'express';
import knex from 'knex';
import { MongoClient } from 'mongodb';
export type ColumnType = 'string' | 'boolean' | 'integer' | 'float' | 'jsonb'; 
export type DatabaseSchema = {
    columns: Record<string, ColumnType>;
    indices?: string | string[][]; 
    tableName: string;
}

export interface EasyCrudConfig {
    dbConnectionInstance: DatabaseClient;
    httpHandler: Router;
    schema: DatabaseSchema;
    routeName: string;
    databaseType: string;
}
export type HttpHandler = Router;
export type DatabaseClient = knex | MongoClient;

export type DatabaseObject = {
    id: string,
    [x: string]: any 
}

export interface DatabaseRepository {
    getAll(): Promise<DatabaseObject[]>,
    getById( id: string ): Promise<DatabaseObject | undefined>,
    deleteById( id: string ): Promise<number>,
    updateById( object: DatabaseObject, id: string ): Promise<DatabaseObject>,
    create( object: DatabaseObject ): Promise<DatabaseObject>
}
