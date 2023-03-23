import React, { useState } from "react";
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className = "auth-form-container">
            <h1>CARPET</h1>
            <h3>THE CAMPUS MARKETPLACE.</h3>

            {/* <h2>Login</h2> */}

            <form className = "login-form" onSubmit = {handleSubmit}>
                <label htmlFor = "Email">email </label>
                <input value = {email} onChange = {(e) =>  setEmail(e.target.value)} type = "Email" placeholder = "example@utexas.edu" id = "email" name = "email"/>

                <label htmlFor = "Password"> password </label>
                <input value = {pass} onChange = {(e) => setPass(e.target.value)} type = "Password" placeholder = "*********" id = "password" name = "password"/>

                <button type = "Submit"> Log In</button>
            </form>

            <button className = "link-button" onClick = {() => props.onFormSwitch('register')}> Don't have an account? Register here!</button>
        
        </div>
    )
}