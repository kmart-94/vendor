import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Hfxz0IuJ5WMoQN8Gs98f1EwXE3paiVKT5dN7GEZL4OYFCEHpgHVfEbrDwyRLvLxRJKn1ddUbwJPwA5MP6C4rVO400TKDmfOhF';

    const onToken = token => {
        console.log(token);
        alert('payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Vendor'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='PayNow'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;