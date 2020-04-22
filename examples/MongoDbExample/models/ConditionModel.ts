import { EasyCrudTypes } from "../../../src"; //TODO use build instead of src
export const ConditionModel: EasyCrudTypes.DatabaseSchema = {
    columns: { 
        code: 'string',
        description: 'string'
    },
    tableName: 'condition',
};