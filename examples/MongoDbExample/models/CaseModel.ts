import { EasyCrudTypes } from "../../../src"; //TODO use build instead of src
export const CaseModel: EasyCrudTypes.DatabaseSchema = {
    columns: { 
        review: 'jsonb',
        text: 'string',
    },
    tableName: 'case',
};