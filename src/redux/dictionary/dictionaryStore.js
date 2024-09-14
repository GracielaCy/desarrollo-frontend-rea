import { creatStore, combineReducers } from 'redux';
import dictionaryReducer from './redux/dictionary/dictionaryReducer';

const rootReducer = combineReducers({
   dictionary: dictionaryReducer, // Asegúrate de que el nombre coincide
});

const store = creatStore(rootReducer);

export default store;