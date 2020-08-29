import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Styles/contacto.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './Formulario'

const Contacto = () => {
    return (
        <section className="contacto">
            <article className="titulo">
                <h2>Contáctame</h2>
            </article>
            
                <Formulario />
            <div className="iconos">
                <ul className="contacto-iconos">
                    <li><a className='link-iconos' href='https://github.com/gitanndie' target="_blank">
                        <FontAwesomeIcon className='iconos' icon={['fab', 'github']} /></a></li>
                    <li><a className='link-iconos' href='https://www.linkedin.com/in/andreagonz%C3%A1lezmantilla/' target="_blank">
                        <FontAwesomeIcon className='iconos' icon={['fab', 'linkedin-in']} /></a>
                    </li>
                    <li><a className='link-iconos' href='https://www.facebook.com/Anndie.GonzalezM/' target="_blank">
                        <FontAwesomeIcon className='iconos' icon={['fab', 'facebook']} /></a></li>
                    <li><a className='link-iconos' href='https://www.instagram.com/anndiegonzalez/' target="_blank">
                        <FontAwesomeIcon className='iconos' icon={['fab', 'instagram']} /></a></li>
                </ul>
            </div>
        </section>
    );
}

export default Contacto;