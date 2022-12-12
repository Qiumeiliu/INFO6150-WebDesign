import React, { useState } from "react";
import './Account.css';
import { Login } from "./Login";
import { Register } from "./Register";

function Account(){
    const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <main id="main" className="main">
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
    </main>
  );
}




export default Account;