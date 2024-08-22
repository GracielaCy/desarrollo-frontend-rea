import { SET_PRODUCTS } from './productTypes';

const initialState = {
    PRODUCTS: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS : {
            return {
                ...state,
                PRODUCTS: action.payload,
            }
        }
        default:
            return state;
    }
};

export default productReducer;