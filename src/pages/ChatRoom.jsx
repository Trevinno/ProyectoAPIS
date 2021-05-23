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
                            <button className='button_spacing' type="submit" id="login-button">Create New Chat</button>
                        </div>
                        <div className='flexBot'>
                            {chats.map(el => <button className='button_spacing' type="submit" id="login-button">Login</button> )}
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default ChatRoom;