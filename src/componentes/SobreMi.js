import React from 'react';
import '../Styles/sobremi.css';

const SobreMi = () => {
    return (
        <section className="sobremi">
            <article className="titulo">
                <h2>Te cuento un <br/> poco sobre mi...</h2>
            </article>
            <section className="reseña">
                <div className='div-res'>
                    <p>
                    Oriunda de Barranquilla y paisa de corazón, siempre he estado interesada por el arte, la música y el diseño, llegué a Medellín hace unos diez años y me radiqué con mi familia.
                    </p>
                    <p>
                    Soy una mujer que no se cansa de aprender, terminé mis estudios de Producción de Televisión en el Poli JIC, luego me dediqué por mucho tiempo a trabajar en el área comercial, hoy en día soy Técnica en Desarrollo de Software me gradue en el Cesde, y tengo un Diplomado con Academía Geek de React y NodeJS.
                    </p>
                    <p>
                    Me apasiona el Front-end, siento que puedo expresarme y poner un granito de arena de lo que poco o mucho que sé en los diferentes proyectos. Me gustaría motivar a muchas mas mujeres que quieran entrar en el mundo de la programación.
                    </p>
                </div>
            </section>
        </section>
    );
}

export default SobreMi;