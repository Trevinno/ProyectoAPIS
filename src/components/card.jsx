import React from 'react';
import '../css/mensajes_positivos.css'

import Message from './message'
import Story from './story'

const Card = ({size, title, text, type, img_url, user}) => {
    let card_type = 'Message'

    return (
        <React.Fragment>
            {card_type == type
            ? 
            <Message
            size={size}
            text={text}
            img_url={img_url}
            user={user}
            /> 
            :
            <Story
            size={size}
            title={title}
            text={text}
            img_url={img_url}
            user={user}
            />}
        </React.Fragment>
      );
}
 
export default Card;