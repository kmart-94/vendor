import React from 'react';
import FormInput from '../form-input/form-input.component.js';
import CustomButton from '../custom-button/CustomButton.component.js';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils.js';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        }
        catch (e) {
            console.log(e);
        }

    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                      name='email' 
                      type="email" 
                      value={this.state.email} 
                      handleChange={(event) => this.setState({...this.state, email: event.target.value})}
                      label= 'email'
                      required
                    />
                    <FormInput 
                      name='password' 
                      type="password" 
                      value={this.state.password} 
                      handleChange={(event) => this.setState({...this.state, password: event.target.value})}
                      label= 'password'
                      required
                    />
                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle} >Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;