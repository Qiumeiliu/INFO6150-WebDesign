import React, { useState } from "react";


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRegex = /^[a-zA-Z\s-]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/;
const numRegex = /^(?!0$)\d+$/;

const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        isValid = false;
    }
    if (!nameRegex.test(name)) {
        alert("Please enter a valid name (letters, spaces, and hyphens only)");
        isValid = false;
    }
    if (!passwordRegex.test(pass)) {
        alert("Please enter a valid password (minimum 6 characters, at least 1 letter and 1 number)");
        isValid = false;
    }
    if (!numRegex.test(num)) {
        alert("Age cannot be 0");
        isValid = false;
    }

    if (isValid) {
        console.log(email);
    }
}
const [num, setNum] = useState(0);

    

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            {/* <label htmlFor="name">Full name</label> */}
            {/* <input value={name} name="name" type="name" id="name" placeholder="full Name" />
            <label htmlFor="email">email</label> */}
            <label htmlFor="name">Full name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text"  id="password" name="name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="text" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" 
            id="password" name="password" />



<button className="age-btn"
        type="button"
        onClick={() => setNum(num + 1)}
      >➕</button><p>Age： {num}</p>
      <button
        type="button"
        disabled={!num}
        onClick={() => setNum(num - 1)}
      >➖</button>


            <button clsaaName='submit-btn' type="submit">Log In</button>
        </form>
        <button className="link-btn"  onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        
    </div>
    )
}





