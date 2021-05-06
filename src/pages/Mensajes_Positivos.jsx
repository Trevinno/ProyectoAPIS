import React, { Component, useState, useEffect } from 'react';

import '../css/mensajes_positivos.css'

import {getPostIts} from '../state/mockData'

import Card from '../components/card'

const Mensajes_Positivos = () => {
    let [PostIts, setPostIts] = useState([])

    useEffect(() => {
        setPostIts(getPostIts())
    }, [])
    return (  
        <React.Fragment>
            <div class="wrapper">
                <main class="content">
                    <div class="feed-grid">
                        {PostIts.map(el => <Card
                            {...el}
                        />)}
                    </div>
                </main>
            </div>
        </React.Fragment>
    );
}
 
export default Mensajes_Positivos;