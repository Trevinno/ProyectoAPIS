import React, { Component } from 'react'; 

import '../css/chatRoom.css'

const ChatRoom = () => {
    return (  
        <React.Fragment>
            <div>
                <div className='container'>
                    <h1>Chat Room</h1>        
                    <form className="form">
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                        <div className='flexBot'>
                            <button type="submit" id="login-button">Login</button>
                            <button type="submit" id="login-button">Login</button>
                            <button type="submit" id="login-button">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default ChatRoom;