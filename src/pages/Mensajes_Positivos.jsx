import React, { Component, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import axios from 'axios';

import '../css/mensajes_positivos.css'

import {getPostIts} from '../state/mockData'

import Card from '../components/card'

const Mensajes_Positivos = () => {
    let [PostIts, setPostIts] = useState([])

    const url = `http://localhost:5000/api/postits/`;

    const history = useHistory()

    let handleAddButton = () => {
        history.push('/AddPostIt/')
    }

    // const getPostIts = async () => {
    //     let postits = await axios.get(url)
    //     return postits
    //   };

    useEffect(async () => {
        // let allPostits = await getPostIts();
        // setPostIts(allPostits)
        setPostIts(getPostIts)
    }, [])


    return (  
        <React.Fragment>
            <div className='flex_placement'>
                <button className='checkout' onClick={() => handleAddButton()} >Add New Post</button>
            </div>
            <div class='wrapper'>
                <main class='content'>
                    <div class='feed-grid'>
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