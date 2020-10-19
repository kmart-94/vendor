import React from 'react';

import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';

import CustomButton from '../custom-button/CustomButton.component';
import CartItem from '../cart-item/cart-item.component';


import './cart-dropdown.styles.scss';

const CartDropDown = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
            <div className='cart-items'>
                {cartItems.map(cartItem => {
                    return <CartItem key={cartItem.id} item={cartItem}/>
                })}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

function mapStateToProps(state) {
    return {cartItems: selectCartItems(state)};
}

export default connect(mapStateToProps)(CartDropDown);