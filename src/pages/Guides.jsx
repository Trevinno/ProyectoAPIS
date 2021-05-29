import React, { Component } from 'react';

import '../css/guide.css'

const Guides = () => {
    return ( 
        <React.Fragment>
            <section className='simple-example'>
                <h1 className='heading'>Guias para Salud Mental</h1>
                <div class='blocks'>
                    <div>
                        <h2>Temor</h2>
                        <p> Todo lo que necesita hacer es sentarse en silencio y observar el momento presente. Si surge el miedo o la ansiedad, reconózcalo. Si puede, tenga curiosidad. Observa la ansiedad. Observe cómo se siente en su cuerpo. Note cualquier pensamiento asociado. Vea si puede observarlo tal como es; no te involucres en la historia, ni intentes deshacerte de ella o cambiarla. Y cuando lo necesite, tome un descanso y dirija su atención a algo neutral, como su respiración o sus manos en su regazo.</p>
                    </div>
                    <div>
                        <h2>Ira</h2>
                        <p>Las herramientas de relajación simples, como la respiración profunda y las imágenes relajantes, pueden ayudar a calmar los sentimientos de enojo. Hay libros y cursos que pueden enseñarle técnicas de relajación y, una vez que las aprenda, podrá recurrir a ellas en cualquier situación. Si está involucrado en una relación en la que ambos socios son de mal genio, podría ser una buena idea que ambos aprendan estas técnicas.</p>
                    </div>
                    <div>
                        <h2>Disgusto</h2>
                        <p>Fíjate cuando los pensamientos críticos aparecen en tu cabeza.Recuerda respirar. No dejes que tus sentimientos controlen tu pensamiento. 
Habla con alguien en quien confíes sobre tus sentimientos.
</p>
                    </div>
                    <div>
                        <h2>Depression</h2>
                        <p>Hacer algunos cambios en el estilo de vida puede mejorar su estado de ánimo y ayudar a aliviar muchos de sus síntomas, incluida la baja autoestima. Trabajar con un terapeuta es a menudo una parte importante del manejo exitoso de la depresión. 
Escribir en un diario es una gran terapia y puede ayudarlo a controlar la depresión. Puede aliviar el estrés siendo abierto acerca de sus pensamientos, sentimientos e inquietudes al escribir, y el manejo del estrés es una parte importante de vivir bien con la depresión. 
Las personas con depresión a menudo experimentan una baja autoestima, por lo que encontrar formas de sentirse mejor consigo mismo es un aspecto importante del tratamiento. Practica el pensamiento positivo enfocando tus pensamientos en tus mejores cualidades. 
Descansar lo suficiente todas las noches es imprescindible para tu estado de ánimo. Las personas con depresión suelen tener alteraciones notables del sueño: duermen demasiado o no lo suficiente. Vaya a la cama y levántese con un horario regular, y nunca escatime en sus horas de sueño.
</p>
                    </div>
                    <div>
                        <h2>Fastidio</h2>
                        <p>El primer paso es lidiar con el dolor. Y una simple meditación de bondad amorosa (por muy cursi que pueda parecerles a algunos de ustedes) es un buen tratamiento curativo. Hay versiones más largas de esta meditación, pero aquí hay una versión simple. Quédese quieto por un momento. Note la irritación o el dolor. Observe cómo se siente y quédese con esa sensación por un momento. Ahora, con un sentimiento de bondad y amor genuinos, dígase a sí mismo: “¿Puedo encontrar un fin a mi dolor? Que pueda ser feliz ". Intenta realmente desear esto para ti. Repítelo varias veces, hasta que se sienta muy genuino. Siéntete libre de repetirlo unas cuantas veces más si te ayuda.</p>
                    </div>
                    {/* <div>
                        <h2>Child 6</h2>
                        <p>These cards have been laid out using grid layout. By setting on the parent, all direct children become grid items.</p>
                    </div> */}
                </div>
            </section>
        </React.Fragment> 
    );
}
 
export default Guides;