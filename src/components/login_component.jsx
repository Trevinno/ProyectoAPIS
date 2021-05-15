import React, { Component } from 'react';
import '../css/login.css'

const LoginComponent = ({handleChangeLogin, handleLogin, setRegister}) => {
    return (
            <form class='login-form'>
                <input onChange={handleChangeLogin} name='email' type='text' placeholder='email address'/>
                <input onChange={handleChangeLogin} name='password' type='passowrd' placeholder='password'/>
                <button onClick={() => handleLogin()}>login</button>
                <p class='message'>Not registered? <a onClick={() => setRegister(true)}>Create an account</a></p>
            </form>
      );
}
 
export default LoginComponent;