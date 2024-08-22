import { SET_PRODUCTS } from './productTypes';

export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products,
    }
}
