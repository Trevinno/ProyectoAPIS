import React, { Component, useContext } from 'react';
import { useHistory } from "react-router-dom";

import '../css/navbar.css'

import { main } from "../state/mainState";

const Navbar = () => {
    let { state: globalState, dispatch } = useContext(main);

    const history = useHistory()

    let handleNavigation = (url) => {
        history.push(url)
    }

    let cerrarSesion = () => {
        // if (globalState)
    }

    console.log(globalState, "Global State Navbar")
    return (  
        <React.Fragment>
            <div class="nav">
                <input type="checkbox" id="nav-check"/>
                <div class="nav-header">
                    <div class="nav-title" onClick={() => handleNavigation('/Homepage')}>
                    Espe
                    </div>
                </div>
                <div class="nav-btn">
                    <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                </div>
                
                <div class="nav-links">
                    <a onClick={() => handleNavigation('/Homepage')}>Home</a>
                    <a onClick={() => handleNavigation('/ChatRoom')} target="_blank">Chat Room</a>
                    <a onClick={() => handleNavigation('/ChatRoom')} target="_blank">ChatBot</a>
                    <a onClick={() => handleNavigation('/Mensajes_Positivos')} target="_blank">Mensajes Postivos</a>
                    <a onClick={() => handleNavigation('/Homepage')} target="_blank">Guias</a>
                    <a onClick={() => handleNavigation('/Perfil/')} target="_blank">Perfil</a>
                    <a onClick={() => handleNavigation('/Login/')} target="_blank">Iniciar Sesion</a>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Navbar;