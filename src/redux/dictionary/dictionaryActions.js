import { SET_DICTIONARY_DATA } from './dictionaryTypes';

export const addDictionaryData = (dictionaryData) => {
    return {
        type: SET_DICTIONARY_DATA,
        payload: dictionaryData,
    };
};
