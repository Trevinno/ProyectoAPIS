import React, { Component } from 'react';

import '../css/navbar.css'


const Navbar = () => {
    return (  
        <React.Fragment>
            <div class="nav">
                <input type="checkbox" id="nav-check"/>
                <div class="nav-header">
                    <div class="nav-title">
                    JoGeek
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
                    <a href="//github.io/jo_geek" target="_blank">Home</a>
                    <a href="http://stackoverflow.com/users/4084003/" target="_blank">Chats</a>
                    <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">Chat Room</a>
                    <a href="https://codepen.io/jo_Geek/" target="_blank">ChatBot</a>
                    <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">Mensajes Postivos</a>
                    <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">Guias</a>
                    <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">Perfil</a>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Navbar;