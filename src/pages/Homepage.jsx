import React, { Component } from 'react';

import '../css/homepage.css' 

const Homepage = () => {
    return ( 
        <React.Fragment>
            <body className='background'>
                <section class="titles">
                    <h1>Espe</h1>
                    <p>Espe es un ecosistema que busca ayudar a sus usuarios a combatir sus emociones negativas a travez de divesros sevicios. En Espe sabemos que la vida puede ser dificil y no siempre podemos lidear con nuestras problemas solos. Atravez de los servicios que ofrecemos, intentamos brindar un cambio a la persona. Ofrecemos 4 recusros de ayuda, los cuales son: un ChatRoom para chatear con usuarios y expertos, un ChatBot al cual puedas deshaogarte y contar para caulquier ayuda emocional y un foro de publicacions donde nuestros usuarios publican mensajes he historias inspiradoras que podrian ayudar a cualuqira.</p>
                </section>

            <section class="container-boxes">
                <div class="box">

                <div class="icon">
                    <a href=""><i class="fas fa-fire"></i></a>
                </div>

                <div class="text">
                    <a href="">
                    <h3>ChatRoom</h3>
                    <p>Aqui podras Chatear con otros usuarios y expertos que estaran dispuestos a ayudarte en cualquier cosa.</p>
                    </a>
                </div>

                </div>

                <div class="box">

                <div class="icon">
                    <a href=""><i class="fas fa-seedling"></i></a>
                </div>

                <div class="text">
                    <a href="">
                    <h3>Chatbot</h3>
                    <p>Aqui podras tener conversaciones completamente privadas con tu amigo virtual, el cual su objetivo es que te sientas mejor.</p>
                    </a>
                </div>

                </div>

                <div class="box">

                <div class="icon">
                    <a href=""><i class="fas fa-address-card"></i></a>
                </div>

                <div class="text">
                    <a href="">
                    <h3>Mensajes Positivos</h3>
                    <p>Aqui podras ver todas los mensajes positivos que han publicado nuestros usuarios para que te hagan ver un lado positivo de todo</p>
                    </a>
                </div>

                </div>
            </section>

            </body>
        </React.Fragment>
     );
}
 
export default Homepage;