import React, { Component, useState } from 'react'; 

import '../css/chatRoom.css'

import {getChats} from '../state/mockData'

const ChatRoom = () => {

    let [chats, setChats] = useState(getChats())

    return (  
        <React.Fragment>
            <div>
                <div className='container'>
                    <h1>Chat Room</h1>        
                    <form className="form">
                        <div className='flexBot'>
                            {chats.map(el => <button type="submit" id="login-button">Login</button> )}
                            {/* <button type="submit" id="login-button">Login</button>
                            <button type="submit" id="login-button">Login</button>
                            <button type="submit" id="login-button">Login</button> */}
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default ChatRoom;