import { combineReducers } from 'redux';

// aca importamos todos los reducers
import defaultReducer from "./default/defaultReducer";
import productReducer from "./product/productReducer";
import formReducer from "./form/formReducer";

const rootReducer = combineReducers({
    default: defaultReducer,
    product: productReducer,
    form: formReducer,
});

export default rootReducer;