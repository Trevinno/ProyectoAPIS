import React, { Component } from 'react';
import '../css/login.css'

const LoginComponent = ({handleChangeLogin, handleLogin, setRegister}) => {
    return (
            <form class='login-form'>
                <input onChange={handleChangeLogin} name='email' type='email' placeholder='correo'/>
                <input onChange={handleChangeLogin} name='password' type='password' placeholder='contraseña'/>
                <button onClick={(e) => handleLogin(e)}>Iniciar Sesion</button>
                <p class='message'>No estas registrado? <a onClick={() => setRegister(true)}>Crea tu cuenta!</a></p>
            </form>
      );
}
 
export default LoginComponent;