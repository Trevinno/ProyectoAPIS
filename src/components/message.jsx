import React, { Component } from 'react';
import '../css/mensajes_positivos.css'

const Message = ({size, text, img_url}) => {
    return (  
        <React.Fragment>
            <div className={size ? 'card wide' : 'card'}> 
                <img src={img_url} alt='image' />
                <div className='info-center'>{text}</div>
                <ul class="card-tools">
                    <li class="tools-item"><i class="fa fa-heart like"></i><span class="tools-count">543</span></li>
                    <li class="tools-item"><i class="fa fa-share share"></i></li>
                </ul>
            </div>
        </React.Fragment>
    );
}
 
export default Message;