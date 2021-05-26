import React, { Component, useContext } from 'react';
import {useParams, Redirect} from 'react-router-dom'

import '../css/specificChat.css'

import { main } from "../state/mainState";

import useChat from '../state/useChat'

const SpecificChatRoom = (props) => {

    let { state: globalState, dispatch } = useContext(main);

    const ChatArray = {
        1: 'Tranquilidad',
        2: 'Alegria',
        3: 'Compasion' 
      };

    const {_id} = useParams()
    const { messages, sendMessage } = useChat(_id);
    const [newMessage, setNewMessage] = React.useState("");

    const handleNewMessageChange = (e) => {
        setNewMessage(e.target.value);
    };

    const handleSendMessage = () => {
        sendMessage(newMessage, globalState.name, globalState.client);
        setNewMessage("");
    };

    if (globalState.name == '') {
        return <Redirect to='/Homepage'/>;
    }

    return ( 
        <React.Fragment>
            <div className="chat-room-container">
                <br/>
                <br/>
                <br/>
                <h1 className="room-name">Chat: {ChatArray[_id]}</h1>
                <div className="messages-container">
                    <ol className="messages-list">
                    {messages.map((message, i) => (
                        <div key={i} className={`message-item ${
                            message.ownedByCurrentUser ? 'my-message' : message.client ? 'helper' : 'received-message'
                        }`}>
                            <p className='username'>{message.user}</p>
                            <li>
                            {message.body}
                            </li>
                        </div>
                    ))}
                    </ol>
                </div>
                <textarea
                    value={newMessage}
                    onChange={handleNewMessageChange}
                    placeholder="Write message..."
                    className="new-message-input-field"
                />
                <button onClick={handleSendMessage} className="send-message-button">
                    Send
                </button>
            </div>

        </React.Fragment>
     );
}
 
export default SpecificChatRoom;