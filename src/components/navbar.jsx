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

    let handleLogOut = () => {
        dispatch({ type: "SET_USER", payload: { name: '', client: '', country: '', bio: '', email: '', img_url: ''}});
        history.push('/Homepage')
    }

    let renderChatButton = () => {
        if(globalState.name != '') {
            return <a onClick={() => handleNavigation('/ChatRoom')} target="_blank">Chat Room</a>
        }
    }

    let renderLogInButton = () => {
        if(globalState.name == '') {
            return <a onClick={() => handleNavigation('/Login/')} target="_blank">Iniciar Sesion</a>
        }
    }

    let renderLogOutButton = () => {
        if(globalState.name != '') {
            return <a onClick={() => handleLogOut()} target="_blank">Cerrar sesión</a>
        }
    }

    let renderProfileButton = () => {
        if(globalState.name != '') {
            return <a onClick={() => handleNavigation('/Perfil/')} target="_blank">Perfil</a>
        }
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
                    <a data-testid='go_home' onClick={() => handleNavigation('/Homepage')}>Home</a>
                    {renderChatButton()}
                    <a onClick={() => handleNavigation('/ChatBot')} target="_blank">ChatBot</a>
                    <a onClick={() => handleNavigation('/Mensajes_Positivos')} target="_blank">Mensajes Postivos</a>
                    <a onClick={() => handleNavigation('/Guides')} target="_blank">Guias</a>
                    {renderProfileButton()}
                    {renderLogInButton()}
                    {renderLogOutButton()}
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Navbar;