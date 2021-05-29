import React, { Component, useContext, useState } from 'react';
import { useHistory, Redirect } from "react-router-dom";
import axios from "axios"

import { main } from '../state/mainState';

import '../css/addComponent.css'


const UpdateProfile = () => {
    let { state: globalState, dispatch } = useContext(main);

    let [userInfo, setUserInfo] = useState({});
    const history = useHistory()
    
    let handleChange = (e) => {
        const auxPostIt = { ...userInfo };
        auxPostIt[e.currentTarget.name] = e.currentTarget.value;
        setUserInfo(auxPostIt);
    }

    let handleChangeHobbies = (e) => {
        let arr = e.currentTarget.value.split(',')
        const auxPostIt = { ...userInfo };
        auxPostIt['hobbies'] = arr
        setUserInfo(auxPostIt);
    }

    let submitForm = (e) => {
        axios.post(`http://localhost:5000/api/users/update/${globalState.email}`, userInfo)
        history.push('/Perfil')
    }

    if (globalState.name == '') {
        return <Redirect to='/Homepage'/>;
    }

    return ( 
        <React.Fragment>
            <body className='body'>
            <form id='myform' onSubmit={submitForm}>
                <header>Editar Informacion de Pefil</header>
                <div className='area'>
                    <div className='row'>
                        <input
                            type='text'
                            name='bio'
                            onChange={handleChange}
                        />
                        <label className='field_title' for='nombre'>Biografia</label>
                    </div>
                    <div className='row'>
                        <input
                            data-testid='input_titulo'
                            type='text'
                            name='hobbies'
                            onChange={handleChangeHobbies}
                        />
                        <label className='field_title' for='nombre'>Hobbies (Separado por commas)</label>
                    </div>
                    <div className='row'>
                        <input
                            data-testid='input_texto'
                            type='text'
                            name='country'
                            onChange={handleChange}
                        />
                        <label className='field_title' for='nombre'>Pais</label>
                    </div>
                    <div className='row'>
                        <input
                            data-testid='input_texto'
                            type='text'
                            name='img_url'
                            onChange={handleChange}
                        />
                        <label className='field_title' for='nombre'>Pic URL</label>
                    </div>
                    <div className="row">
                    </div>
                </div>
                <div className='area'>
                </div>
                <div className='black_border flex_row row'>
                    <input type='submit' value='Agregar' className='btnEnviar' />
                </div>
                </form>
            </body>
        </React.Fragment>
     );
}
 
export default UpdateProfile;