import Axios from '../../api';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, PRODUCT_DETAILS_REQUEST } from './cartConstants';

export const addToCart = (id, qty = 1) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/products/${id}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            ...data,
            qty
        }
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};


export const productDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });
        const { data } = await Axios.get(`/api/products/${id}`);
        return data
    } catch (error) {
        console.log(error);
    }
};
