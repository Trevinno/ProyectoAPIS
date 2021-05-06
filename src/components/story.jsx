import React, { Component } from 'react';
import '../css/mensajes_positivos.css'

const Story = ({size, title, text, img_url}) => {
    return ( 
        <React.Fragment>
            <div className={size ? 'card-half wide' : 'card-half'}>
                <div className='card-img'><span className='label'> <i className='fa fa-star'></i></span><img src={img_url} alt='img' /></div>
                <div class="card-text">
                    <h4>{title}</h4>
                    <p>{text}</p>
                </div>
                <ul class="card-tools">
                    <li class="tools-item"><i class="fa fa-heart like"></i><span class="tools-count">543</span></li>
                    <li class="tools-item"><i class="fa fa-share share"></i></li>
                </ul>
            </div>
        </React.Fragment>
     );
}
 
export default Story;