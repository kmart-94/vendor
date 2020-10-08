import React from 'react';
import SignIn from '../../components/sign-in/SignIn.component.js';

import './loginPage.styles.scss';

const LogInPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            SIGN IN
            <SignIn/>
        </div>
    );
}

export default LogInPage;