import React, { Component } from 'react';
import '../css/mensajes_positivos.css'

const Mensajes_Positivos = () => {
    return (  
        <React.Fragment>
            {/* <header>
                <nav class="navigation">
                    <div class="logotype">NewsApp</div>
                    <ul class="categories">
                        <li class="category-item"><a href="#">Sports</a></li>
                        <li class="category-item"><a href="#">Tech</a></li>
                        <li class="category-item"><a href="#">Books</a></li>
                        <li class="category-item"><a href="#">Art</a></li>
                    </ul>
                </nav>
                <div class="search"><input type="search" placeholder="Type to search..." /></div>
            </header> */}
            <div class="wrapper">
                {/* <aside class="sidebar">
                    <ul class="sidebar-list">
                        <li class="sidebar-item"><i class="fa fa-newspaper-o"></i></li>
                        <li class="sidebar-item sb-active"><i class="fa fa-th"></i></li>
                        <li class="sidebar-item"><i class="fa fa-picture-o"></i></li>
                        <li class="sidebar-item"><i class="fa fa-bell-o"></i></li>
                        <li class="sidebar-item"><i class="fa fa-bolt"></i></li>
                    </ul>
                </aside> */}
                <main class="content">
                    <div class="feed-grid">
                        <div class="card-half wide">
                            <div class="card-img"><span class="label"> <i class="fa fa-star"></i></span><img src="http://a5.files.airows.com/image/upload/c_fit,cs_srgb,w_620/MTM0MjY4NjM0MzY4NTY5MzE0.png" alt="img" /></div>
                            <div class="card-text">
                                <h4>All outdoor & adventure lovers should follow this guy on instagram</h4>
                                <p>Just take a look at a few of his shots and try not to want this in your feed regularly.</p>
                            </div>
                            <ul class="card-tools">
                                <li class="tools-item"><i class="fa fa-heart like"></i><span class="tools-count">543</span></li>
                                <li class="tools-item"><i class="fa fa-share share"></i></li>
                            </ul>
                        </div>
                        <div class="card"> <img src="https://40.media.tumblr.com/027d3fdde45d8cb950a74dd070cf8e90/tumblr_nxfo8rG3o81qzleu4_og_540.jpg" alt="img" />
                            <div class="info-center">12 Photos Of A Gorgeously Designed NYC Home</div>
                        </div>
                        <div class="card"><img src="https://36.media.tumblr.com/1a6bf1c955f5278517f71d50b60ac89d/tumblr_nw46p7NOHH1qkegsbo2_540.jpg" alt="img" />
                            <div class="info-center">Beautiful Yet Simple Warehouse-Inspired Home</div>
                        </div>
                        <div class="card"><img src="https://41.media.tumblr.com/38033666a5ce5c84a658fd90409f8467/tumblr_nxcmsxVSHs1qkegsbo1_540.jpg" alt="img" />
                            <div class="info-center">Top trends this winter 2016</div>
                        </div>
                        <div class="card-half wide">
                            <div class="card-img"><img src="https://40.media.tumblr.com/tumblr_lzgmkfRJ7U1qb899go1_500.jpg" alt="img" /></div>
                            <div class="card-text">
                                <h4>History travel to Spain. Photos stunning country</h4>
                                <p>Just take a look at a few of his shots and try not to want this in your feed regularly.</p>
                            </div>
                            <ul class="card-tools">
                                <li class="tools-item"><i class="fa fa-heart like"></i><span class="tools-count">133</span></li>
                                <li class="tools-item"><i class="fa fa-share share"></i></li>
                            </ul>
                        </div>
                        <div class="card-half">
                            <div class="card-img"><img src="https://www.chelseafc.com/content/cfc/en/homepage/news/boilerplate-config/latest-news/2015/11/pre-match-briefing--stoke-city-v-chelsea--part-two/_jcr_content.autoteaser.jpeg" alt="img" /></div>
                            <div class="card-text">
                                <h4>Pre-Match Briefing: Stoke City v Chelsea</h4>
                                <p>We have a tea-time appointment in the Potteries later today.</p>
                            </div>
                            <ul class="card-tools">
                                <li class="tools-item"><i class="fa fa-heart like"></i><span class="tools-count">4533</span></li>
                                <li class="tools-item"><i class="fa fa-share share"></i></li>
                            </ul>
                        </div>
                        <div class="card"> <img src="https://41.media.tumblr.com/7be0a9c6035a5eaaafaddab95a3d77ae/tumblr_mmp17zInpt1qhfgjbo1_540.jpg" alt="img" />
                            <div class="info-center">Best 100 memorable sports photos</div>
                        </div>
                        <div class="card"><img src="https://cdn-images-1.medium.com/max/600/1*wFiuAFruqIUTNU99xpb_zw.gif" alt="img" />
                            <div class="info-center">Long shadow is dead. Welcome Diffuse shadows.</div>
                        </div>
                        <div class="card"> <img src="https://40.media.tumblr.com/027d3fdde45d8cb950a74dd070cf8e90/tumblr_nxfo8rG3o81qzleu4_og_540.jpg" alt="img" />
                            <div class="info-center">12 Photos Of A Gorgeously Designed NYC Home</div>
                        </div>
                        <div class="card"><img src="https://40.media.tumblr.com/214255d33d16e6075d674c9cd84d9a6c/tumblr_no7630It9v1qd6rjmo1_540.jpg" alt="img" />
                            <div class="info-center">Christina Schneiderlin: Interview with the artist</div>
                        </div>
                        <div class="card-half">
                            <div class="card-img"><span class="label"> <i class="fa fa-star"></i></span><img src="https://40.media.tumblr.com/682b6eb0bcafb090c26cda164a235f3b/tumblr_n04czvggDF1sv6eyto1_500.jpg" alt="img" /></div>
                            <div class="card-text">
                                <h4>You just should run</h4>
                                <p>Learn how to run can improve your health.</p>
                            </div>
                            <ul class="card-tools">
                                <li class="tools-item"><i class="fa fa-heart like"></i><span class="tools-count">8543</span></li>
                                <li class="tools-item"><i class="fa fa-share share"></i></li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </React.Fragment>
    );
}
 
export default Mensajes_Positivos;