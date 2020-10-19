import {createSelector} from 'reselect';

//this is an input selector
const selectCart = state => state.cart;

const selectUser = state => state.user;

export const selectCartItems = createSelector(
    //takes two arguments
    //first is an array/collection of input selectors
    [selectCart],
    //the second is a function that returns the value we want from this selector
    //it's parameters are the values returned by the input selectors in order
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)

)