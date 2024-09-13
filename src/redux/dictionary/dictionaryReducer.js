import { SET_DICTIONARY_DATA } from './dictionaryTypes';

const initialState = {
    dictionary: [] 
        
};

const dictionaryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DICTIONARY_DATA : {
            return {
                ...state,
                dictionary: [
                    ...state.dictionary,
                    ...action.payload],
            };
            
        }
        default:
            return state;
    }
};

export default dictionaryReducer;