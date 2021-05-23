import React, { Component, useContext } from 'react';
import { useHistory } from "react-router-dom";

import axios from 'axios';


import { main } from "../state/mainState";

import '../css/mensajes_positivos.css'

const Story = ({size, title, text, img_url, user}) => {

    let { state: globalState, dispatch } = useContext(main);

    const history = useHistory()

    let handleUserClick = async () => {
        let {data} = await axios.get(`http://localhost:5000/api/users/${user}`)
        dispatch({ type: "SET_OTHER_USER", payload: {other_user: data[0]}});
        history.push(`/Perfil/${user}`)
    }

    return ( 
        <React.Fragment>
            <div className={size ? 'card-half wide' : 'card-half'}>
                <div className='card-img'><span className='label'> <i className='fa fa-star'></i></span><img src={img_url} alt='img' /></div>
                <div class="card-text">
                    <h4>{title}</h4>
                    <p>{text}</p>
                </div>
                <ul class="card-tools">
                    <li onClick={() => handleUserClick()} class="tools-item"><i class="fa fa-heart like"></i><span class="tools-count">{user}</span></li>
                    <li class="tools-item"><i class="fa fa-share share"></i></li>
                </ul>
            </div>
        </React.Fragment>
     );
}
 
export default Story;