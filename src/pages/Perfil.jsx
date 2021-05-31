import React, { Component, useContext, useState, useEffect } from 'react';
import { useHistory, Redirect } from "react-router-dom";

import '../css/perfil.css'
import '../css/mensajes_positivos.css'

import { main } from '../state/mainState';


const emojiArray = {
    mexico: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/279/flag-mexico_1f1f2-1f1fd.png",
    south_korea: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/279/flag-south-korea_1f1f0-1f1f7.png",
    usa: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/279/flag-united-states_1f1fa-1f1f8.png",
    canada: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/279/flag-canada_1f1e8-1f1e6.png",
    spain: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/279/flag-spain_1f1ea-1f1f8.png",
    uk: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/279/flag-united-kingdom_1f1ec-1f1e7.png",
    portugal: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/279/flag-portugal_1f1f5-1f1f9.png",
    china: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/279/flag-china_1f1e8-1f1f3.png",
    france: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/279/flag-france_1f1eb-1f1f7.png",
    canada: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/flag-canada_1f1e8-1f1e6.png",
    other: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/279/white-flag_1f3f3-fe0f.png"
  };


const Perfil = () => {
    let { state: globalState, dispatch } = useContext(main);
    let [flag, setFlag] = useState("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/279/white-flag_1f3f3-fe0f.png");
    const history = useHistory()


    useEffect(async () => {
        let flagC = emojiArray[globalState.country.toLowerCase()]
        setFlag(flagC)
    }, []);

    const handleUpdate = () => {
        history.push('/UpdateProfile/')
    }

    if (globalState.name == '') {
        return <Redirect to='/Homepage'/>;
    }

    
    return ( 
        <React.Fragment>
            <section class="profile_container">
                <div class="profile_img_section">
                    <img class="profile_img-LG" src={globalState.img_url} />
                    <div class="flag_wrapper">
                        <img class="flag" src={flag} alt="South Korean Flag" />
                    </div>
                </div>

                <div class="profile_desc_section">
                    <h2>{globalState.name}</h2>
                    <h3>{globalState.client == 0 ? 'Asesor' : 'Persona'}</h3>
                    <p class="description">{globalState.bio}</p>

                    <div class="interests">
                        {globalState.hobbies && globalState.hobbies.length > 0 && globalState.hobbies.map(el => 
                        <span class="interests_item">
                            {el}
                        </span>
                        )}
                        {/* <span class="interests_item">Technology</span>
                        <span class="interests_item">Management</span>
                        <span class="interests_item">Leadership</span> */}
                    </div>
                </div>
            </section>
            <div className='flex_placement'>
                    <button className='checkout more_space' onClick={() => handleUpdate()} >Editar Perfil</button>
            </div>
            
        </React.Fragment>
    );
}
 
export default Perfil;