import React from 'react';
import FormInput from '../form-input/form-input.component.js';
import CustomButton from '../custom-button/CustomButton.component.js';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({email: '', password: ''});
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
                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;