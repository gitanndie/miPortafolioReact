import React from 'react';
import '../Styles/inicio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import me from '../images/me.jpg';


const Inicio = () => {
    return (
        <div>
        <section className="sec-inicio">
            <div className="img">
                <img src={me} alt="foto" />
            </div>
                <article className="sec-me">
                    <span className="sec-nombre">
                        <h1>Andrea Carolina González Mantilla</h1>
                        <p>Desarrolladora de Software Jr. Front-End</p>
                    </span>
                </article>
                <div className="iconos">
                <ul className="contacto-iconos">
                    <li><a className='link-iconos' href='https://developer.mozilla.org/es/docs/HTML/HTML5' target="_blank">
                        <FontAwesomeIcon className='iconos' icon={['fab', 'html5']} /></a></li>
                    <li><a className='link-iconos' href='https://developer.mozilla.org/es/docs/Web/CSS' target="_blank">
                        <FontAwesomeIcon className='iconos' icon={['fab', 'css3-alt']} /></a>
                    </li>
                    <li><a className='link-iconos' href='https://es.reactjs.org/' target="_blank">
                        <FontAwesomeIcon className='iconos' icon={['fab', 'react']} /></a></li>
                    <li><a className='link-iconos' href='https://getbootstrap.com/' target="_blank">
                        <FontAwesomeIcon className='iconos' icon={['fab', 'bootstrap']} /></a></li>
                        <li><a className='link-iconos' href='https://sass-lang.com/' target="_blank">
                        <FontAwesomeIcon className='iconos' icon={['fab', 'sass']} /></a></li>
                </ul>
            </div>
        </section>
        </div>
    );
}

export default Inicio;