import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../action/cartConstants';

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
    cart: { cartItems: cartItemsFromStorage }
};

export const cartReducer = (state = initialState.cart, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const existItem = state?.cartItems?.find(x => x._id === item._id);

            if (existItem) {
                return {
                    ...state,
                    cartItems: state?.cartItems?.map(x => x._id === existItem._id ? item : x)
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                };
            }

        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x._id !== action.payload)
            };

        default:
            return state;
    }
};
