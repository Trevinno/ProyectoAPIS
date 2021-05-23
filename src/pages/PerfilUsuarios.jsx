import React, { Component, useContext } from 'react';

import '../css/perfil.css'

import { main } from '../state/mainState';
import { Redirect } from 'react-router'

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
    other: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/279/white-flag_1f3f3-fe0f.png"
  };

const PerfilUsuarios = (props) => {
    const { _id } = props.match.params;
    let { state: globalState, dispatch } = useContext(main);

    const {name, client, country, bio, email, img_url, hobbies} = globalState.other_user
    console.log(globalState.other_user, 'jose message')
    
    
    console.log('id of the user', _id)
    return ( 
        <React.Fragment>
            <section class="profile_container">
                <div class="profile_img_section">
                    <img class="profile_img-LG" src={img_url} />
                    <div class="flag_wrapper">
                        <img class="flag" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/279/flag-south-korea_1f1f0-1f1f7.png" alt="South Korean Flag" />
                    </div>
                </div>

                <div class="profile_desc_section">
                    <h2>{name}</h2>
                    <h3>{client == 0 ? 'Asesor' : 'Persona'}</h3>
                    <p class="description">bio</p>

                    <div class="interests">
                        {hobbies && hobbies > 0 && hobbies.map(el => 
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
        </React.Fragment>
    );
}
 
export default PerfilUsuarios;