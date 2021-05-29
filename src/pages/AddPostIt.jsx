import React, { Component, useState, useContext } from 'react';
import { useHistory, Redirect } from "react-router-dom";
import axios from "axios"

import { main } from '../state/mainState';

import '../css/addComponent.css'

const AddPostIt = () => {
    let { state: globalState, dispatch } = useContext(main);

    let [postIt, setPostIt] = useState({});
    const history = useHistory()
    
    let handleChange = (e) => {
        const auxPostIt = { ...postIt };
        auxPostIt[e.currentTarget.name] = e.currentTarget.value;
        setPostIt(auxPostIt);
    }

    let submitForm = (e) => {
        axios.post("http://localhost:5000/api/postits/save", postIt)
        history.push('/Mensajes_Positivos')
    }

    if (globalState.name == '') {
        return <Redirect to='/Homepage'/>;
    }

    return ( 
        <React.Fragment>
            <body className='body'>
            <form id='myform' onSubmit={submitForm}>
                <header>Agrega un mensaje positivo</header>
                <div className='area'>
                    <div className='row'>
                        <div className='color_checkbox'>
                            <input 
                                data-testid='tamano_true'
                                type='radio' 
                                name='size' 
                                value='1'
                                className='shorter_text'
                                onChange={handleChange}
                                />
                        </div>
                        <label className='field_title' for='male'>Tamaño</label>
                        <label for='nombre'>Grande</label>
                        <div className='color_checkbox'>
                            <input 
                                type='radio'  
                                name='size' 
                                value='0'
                                className='shorter_text'
                                onChange={handleChange}
                                />
                        </div>
                        <label for='nombre'>Pequeño</label>
                    </div>
                    <div className='row'>
                        <div className='color_checkbox'>
                            <input 
                                data-testid='tipo_mensaje'
                                type='radio' 
                                name='type' 
                                value='Message'
                                className='shorter_text'
                                onChange={handleChange}
                                />
                        </div>
                        <label className='field_title' for='male'>Tipo</label>
                        <label for='nombre'>Mensaje</label>
                        <div className='color_checkbox'>
                            <input 
                                type='radio'  
                                name='type' 
                                value='Story'
                                className='shorter_text'
                                onChange={handleChange}
                                />
                        </div>
                        <label for='nombre'>Historia</label>
                    </div>
                    <div className='row'>
                        <input
                            type='text'
                            name='title'
                            onChange={handleChange}
                        />
                        <label className='field_title' for='nombre'>Titulo</label>
                    </div>
                    <div className='row'>
                        <input
                            data-testid='input_titulo'
                            type='text'
                            name='text'
                            onChange={handleChange}
                        />
                        <label className='field_title' for='nombre'>Texto</label>
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
     )
}
 
export default AddPostIt;