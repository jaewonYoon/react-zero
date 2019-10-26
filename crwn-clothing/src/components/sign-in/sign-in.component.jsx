import React from 'react';

import FormInput from '../form-input/form-input.component'; 
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';

import {signInWithGoogle} from '../../firebase/firebase.util';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            email: '',
            password: ''
        }
    }
    handleChange = event => {
        // const {value,name} = event.target; 
        const value = event.target.value;
        const name = event.target.name;
        // this.setState({[name]: value})
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '', password: ''
        })
    }
    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account </h2>
                <span>Sign in with your email and password</span>
            
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        onChange={this.handleChange}
                        value={this.state.email} 
                        label="email"
                        required />
                    <FormInput 
                        name="password" 
                        type="password"    
                        onChange ={this.handleChange}
                        value={this.state.password} 
                        label="password"
                        required />
                    <div className="button">
                        <CustomButton
                            type ="submit" 
                        >
                        SIGN IN</CustomButton>
                        <CustomButton onClick ={signInWithGoogle} isGoogleSignIn
                            type ="submit" 
                        >
                        SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;