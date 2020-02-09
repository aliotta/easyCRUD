import {  Router } from 'express';
import knex from 'knex';
export type ColumnType = 'string' | 'boolean' | 'integer' | 'float' | 'jsonb'; 
export type DatabaseSchema = {
    columns: Record<string, ColumnType>;
    indices?: string | string[][]; 
}

export interface EasyCrudConfig {
    dbConnectionInstance: knex;
    httpHandler: Router;
    schema: DatabaseSchema;
}
export type HttpHandler = Router;
export type DatabaseClient = knex;
