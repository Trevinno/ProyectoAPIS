import React from 'react';
import '../css/mensajes_positivos.css'

import Message from './message'
import Story from './story'

const Card = ({size, title, text, type, img_url}) => {
    let card_type = 'Message'

    return (
        <React.Fragment>
            {card_type == type
            ? 
            <Message
            size={size}
            text={text}
            img_url={img_url}
            /> 
            :
            <Story
            size={size}
            title={title}
            text={text}
            img_url={img_url}
            />}
        </React.Fragment>
      );
}
 
export default Card;