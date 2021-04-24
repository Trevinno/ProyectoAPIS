import React, { Component } from 'react';

import '../css/perfil.css'

const Perfil = () => {
    return ( 
        <React.Fragment>
            <section class="profile_container">
                <div class="profile_img_section">
                    <img class="profile_img-LG" src="https://cdn.idntimes.com/content-images/community/2020/10/122163576-262420488513552-863075192792965334-n-f95e3dd6d25d3618eb9f1b3b9bcc5796.jpg" />
                    <div class="flag_wrapper">
                        <img class="flag" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/flag-south-korea_1f1f0-1f1f7.png" alt="South Korean Flag" />
                    </div>
                </div>

                <div class="profile_desc_section">
                    <h2>Seo Dal-Mi</h2>
                    <h3>CEO</h3>
                    <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                    <div class="interests">
                        <span class="interests_item">Technology</span>
                        <span class="interests_item">Management</span>
                        <span class="interests_item">Leadership</span>
                    </div>
                </div>

            </section>
        </React.Fragment>
    );
}
 
export default Perfil;