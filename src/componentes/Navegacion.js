import React from 'react';
import '../Styles/navegacion.css'
import { Link } from 'react-router-dom';

const Navegacion = () => {
    return (
        <nav className='navbar navbar-expand-md navegacion'>
            <h2 className='hola'>Bienvenid@, a mi Portafolio</h2>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarsExample02' aria-controls='navbarsExample02' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarsExample02'>
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item'>
                        <Link className='items draw-border' to='/'>Inicio</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='items draw-border' to='/sobremi'>Quien soy</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='items draw-border' to='/proyectos'>Proyectos</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='items draw-border' to='/contacto'>Contáctame</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navegacion;
