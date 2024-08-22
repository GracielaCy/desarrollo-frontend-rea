import { createStore } from 'redux';

// aca importamos nuestro reducer
import rootReducer from './reducers';
const store = createStore(rootReducer);

export default store;