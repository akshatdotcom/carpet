import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className = "auth-form-container">
            <h1>CARPET</h1>
            <h3>The Campus Marketplace.</h3>
            {/* <h2>Register</h2> */}
            <form className = "register-form" onSubmit = {handleSubmit}>
            <label htmlFor = "name">full name </label>
            <input value = {name} name = "name" id = "name" placeholder = "full name" />

            <label htmlFor = "Email"> email </label>
            <input value = {email} onChange = {(e) =>  setEmail(e.target.value)} type = "Email" placeholder = "example@utexas.edu" id = "email" name = "email"/>
        
            <label htmlFor = "Password"> password </label>
            <input value = {pass} onChange = {(e) => setPass(e.target.value)} type = "Password" placeholder = "*********" id = "password" name = "password"/>
            
            <button type = "Submit"> Register</button>
            </form>

            <button className = "link-button" onClick = {() => props.onFormSwitch('login')}> Already have an account? Login here!</button>
        
        </div>    
    )
}