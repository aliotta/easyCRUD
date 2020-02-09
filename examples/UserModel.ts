import { EasyCrudTypes } from "../src"; //TODO use build instead of src
export const UserModel: EasyCrudTypes.DatabaseSchema = {
    columns: { 
        name: 'string',
        isHappy: 'boolean',
        hapinessLevel: 'integer'
    }

};