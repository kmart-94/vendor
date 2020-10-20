import {createSelector} from 'reselect';

//a selector is something that takes the whole state and takes just a slice of it
//this is an input selector
const selectCart = state => state.cart;

//this is an output selector
export const selectCartItems = createSelector(
    //takes two arguments
    //first is an array/collection of input selectors
    [selectCart],
    //the second is a function that returns the value we want from this selector
    //it's parameters are the values returned by the input selectors in order
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)

);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);