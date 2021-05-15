import React, { Component, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import axios from 'axios';

import '../css/mensajes_positivos.css'

// import {getPostIts2} from '../state/mockData'

import Card from '../components/card'

import Loader from "../components/loader"

const Mensajes_Positivos = () => {
    const history = useHistory()
    let [PostIts, setPostIts] = useState([])

    const url = `http://localhost:5000/api/postits/`;

    let handleAddButton = () => {
        history.push('/AddPostIt/')
    }

    const getPostIts = async () => {
        let postits = await axios.get(url)
        console.log(postits.data, 'getPostIts data')
        return postits
    };

    useEffect(async () => {
        let { data } = await getPostIts();
        setPostIts(data)
    }, [])

    console.log(PostIts, 'the posts its')
    return (  
        <React.Fragment>
            <div className='flex_placement'>
                <button className='checkout' onClick={() => handleAddButton()} >Add New Post</button>
            </div>
            <div class='wrapper'>
                <main class='content'>
                    <div class='feed-grid'>
                        {PostIts && PostIts.length > 0 && PostIts.map(el => <Card
                            {...el}
                        />)}
                    </div>
                </main>
            </div>
        </React.Fragment>
    );
}
 
export default Mensajes_Positivos;