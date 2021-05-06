import React, { Component } from 'react';

import '../css/homepage.css' 

const Homepage = () => {
    return ( 
        <React.Fragment>
            <body className='background'>
                <section class="titles">

                    <h1>Espe</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maiores consectetur, laboriosam rerum obcaecati.</p>

                </section>

            <section class="container-boxes">
                <div class="box">

                <div class="icon">
                    <a href=""><i class="fas fa-fire"></i></a>
                </div>

                <div class="text">
                    <a href="">
                    <h3>The Teacher</h3>
                    <p>The best teacher you can have, internationally renowned "hooker".</p>
                    </a>
                </div>

                </div>

                <div class="box">

                <div class="icon">
                    <a href=""><i class="fas fa-seedling"></i></a>
                </div>

                <div class="text">
                    <a href="">
                    <h3>The Yarn</h3>
                    <p>We will use only animal-friendly, fair-trade yarn. Only the best!</p>
                    </a>
                </div>

                </div>

                <div class="box">

                <div class="icon">
                    <a href=""><i class="fas fa-address-card"></i></a>
                </div>

                <div class="text">
                    <a href="">
                    <h3>The Group</h3>
                    <p>Become a member, become family. Teamwork is everything.</p>
                    </a>
                </div>

                </div>
            </section>

            </body>
        </React.Fragment>
     );
}
 
export default Homepage;