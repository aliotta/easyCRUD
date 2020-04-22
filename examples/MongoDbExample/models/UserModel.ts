import { EasyCrudTypes } from "../../../src"; //TODO use build instead of src
export const UserModel: EasyCrudTypes.DatabaseSchema = {
    columns: { 
        username: 'string',
        password: 'string',
    },
    tableName: 'user',
};