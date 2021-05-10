import React, { Component } from 'react';

import '../css/addComponent.css'

const AddPostIt = () => {

    let handleChange = (e) => {
        console.log('hello how are you')
    }

    let submitForm = (e) => {
        console.log('hello how are you')
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
                                type='radio' 
                                name='size' 
                                value='1'
                                className='shorter_text'
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
                                />
                        </div>
                        <label for='nombre'>Pequeño</label>
                    </div>
                    <div className='row'>
                        <div className='color_checkbox'>
                            <input 
                                type='radio' 
                                name='type' 
                                value='Message'
                                className='shorter_text'
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
                            type='text'
                            name='desc'
                            onChange={handleChange}
                        />
                        <label className='field_title' for='nombre'>Texto</label>
                    </div>
                    <div className='row'>
                        <input
                            type='text'
                            name='pic_url'
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