import { SET_DICTIONARY_DATA, REMOVE_DICTIONARY_DATA } from './dictionaryTypes';

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
          case REMOVE_DICTIONARY_DATA : {
            const lenguajeRemove = action.payload.toLowerCase();
            return {
                ...state,
                dictionary: state.dictionary.filter(
                    lenguajeSet => !Object.values(lenguajeSet).some(lenguaje => lenguaje.toLowerCase()== lenguajeRemove)
                ),
            };   
    
         }
        
        default:
            return state;
    }
};

export default dictionaryReducer;