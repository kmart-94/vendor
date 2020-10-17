import React from 'react';

import {connect} from 'react-redux';

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

function mapStateToProps({cart}) {
    return {cartItems: cart.cartItems};
}

export default connect(mapStateToProps)(CartDropDown);