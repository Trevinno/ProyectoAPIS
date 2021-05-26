import React, { Component, useState, useContext } from 'react'; 
import { useHistory, Redirect } from "react-router-dom";

import '../css/chatRoom.css'

import { main } from "../state/mainState";

import {getChats} from '../state/mockData'

const ChatRoom = () => {

    let { state: globalState, dispatch } = useContext(main);

    const history = useHistory()

    let handleRoomChange = (e, id) => {
        history.push(`/SpecificChatRoom/${id}`)
    }

    let [chats, setChats] = useState(getChats())

    if (globalState.name == '') {
        return <Redirect to='/Homepage'/>;
    }

    return (  
        <React.Fragment>
            <div>
                <div className='container'>
                    <h1>Chat Room</h1>        
                    <form className="form">
                        <div className='flexBot'>
                            {chats.map(el => <button onClick={(e) => handleRoomChange(e, el.id)} className='button_spacing' type="submit" id="login-button">{el.name}</button> )}
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default ChatRoom;