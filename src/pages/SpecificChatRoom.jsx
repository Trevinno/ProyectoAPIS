import React, { Component } from 'react';

import '../css/specificChat.css'

import useChat from '../state/useChat'

const SpecificChatRoom = () => {

    const { messages, sendMessage } = useChat(4);
    const [newMessage, setNewMessage] = React.useState("");

    const handleNewMessageChange = (e) => {
        setNewMessage(e.target.value);
    };

    const handleSendMessage = () => {
        sendMessage(newMessage);
        setNewMessage("");
    };


    return ( 
        <React.Fragment>
            <div className="chat-room-container">
                <h1 className="room-name">Chat: {'Each specific Info'}</h1>
                <div className="messages-container">
                    <ol className="messages-list">
                    {messages.map((message, i) => (
                        <li
                        key={i}
                        className={`message-item ${
                            message.ownedByCurrentUser ? "my-message" : "received-message"
                        }`}
                        >
                        {message.body}
                        </li>
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