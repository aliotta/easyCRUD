import { EasyCrudTypes } from "../../../src"; //TODO use build instead of src
export const UserModel: EasyCrudTypes.DatabaseSchema = {
    columns: { 
        isHappy: 'boolean',
        hapinessLevel: 'integer',
    },
    tableName: 'user',
};