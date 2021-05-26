import React, { Component } from 'react';
import '../css/login.css'

const RegisterComponent = ({handleChangeRegister, handleRegister, setRegister}) => {
    return ( 
        <React.Fragment>
            <form class='register-form'>
                <input onChange={handleChangeRegister} name='name' type='text' placeholder='name'/>
                <input onChange={handleChangeRegister} name='email' type='email' placeholder='email address'/>
                <input onChange={handleChangeRegister} name='password' type='password' placeholder='password'/>
                <input onChange={handleChangeRegister} name='country' type='text' placeholder='country'/>
                <button onClick={() => handleRegister()}>create</button>
                <p class="message">Already registered? <a onClick={() => setRegister(false)}>Sign In</a></p>
            </form>
        </React.Fragment>
     );
}
 
export default RegisterComponent;