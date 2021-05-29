import React, { Component } from 'react';
import '../css/login.css'

const RegisterComponent = ({handleChangeRegister, handleRegister, setRegister}) => {
    return ( 
        <React.Fragment>
            <form class='register-form'>
                <input onChange={handleChangeRegister} name='name' type='text' placeholder='nombre'/>
                <input onChange={handleChangeRegister} name='email' type='email' placeholder='correo'/>
                <input onChange={handleChangeRegister} name='password' type='password' placeholder='contraseña'/>
                <input onChange={handleChangeRegister} name='country' type='text' placeholder='pais'/>
                <button onClick={() => handleRegister()}>Crear Cuenta</button>
                <p class="message">Ya estas registrado? <a onClick={() => setRegister(false)}>Iniciar Sesion</a></p>
            </form>
        </React.Fragment>
     );
}
 
export default RegisterComponent;