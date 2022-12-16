import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/;



    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
    
        // Check if email is valid
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            isValid = false;
        }
    
        // Check if password is valid
        if (!passwordRegex.test(pass)) {
            alert("Please enter a valid password (minimum 6 characters, at least 1 letter and 1 number)");
            isValid = false;
        }
    
        // If all fields are valid, submit the form
        if (isValid) {
            console.log(email);
        }
    }


    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="text" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />
                
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}   