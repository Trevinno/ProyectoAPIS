import React, { Component } from 'react';
import '../css/login.css'

const LoginComponent = ({handleChangeLogin, handleLogin, setRegister}) => {
    return (
            <form class='login-form'>
                <input onChange={handleChangeLogin} name='email' type='email' placeholder='email address'/>
                <input onChange={handleChangeLogin} name='password' type='password' placeholder='password'/>
                <button onClick={(e) => handleLogin(e)}>login</button>
                <p class='message'>Not registered? <a onClick={() => setRegister(true)}>Create an account</a></p>
            </form>
      );
}
 
export default LoginComponent;