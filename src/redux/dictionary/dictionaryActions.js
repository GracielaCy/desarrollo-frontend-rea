import { SET_DICTIONARY_DATA, REMOVE_DICTIONARY_DATA } from './dictionaryTypes';

export const addDictionaryData = (dictionaryData) => {
    return {
        type: SET_DICTIONARY_DATA,
        payload: dictionaryData,
    };
};
export const removeDictionaryData = (lenguaje) =>{
    return {
        type: REMOVE_DICTIONARY_DATA,
        payload: 
            lenguaje,
        
    };
}