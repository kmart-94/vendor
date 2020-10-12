import React from 'react';
import SignIn from '../../components/sign-in/SignIn.component.js';
import SignUp from '../../components/sign-up/sign-up.component.js';

import './loginPage.styles.scss';

const LogInPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn/>
            <SignUp/>
        </div>
    );
}

export default LogInPage;