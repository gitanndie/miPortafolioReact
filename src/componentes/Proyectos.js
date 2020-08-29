import React from 'react';
import '../Styles/proyectos.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import form from'../images/form.png';
import hamacas from '../images/hamacas.png';
import queen from '../images/queen.png';
import tecnico from '../images/tecnico.png';
import Fylo from '../images/Fylo.png';
import Caja from '../images/Caja.png';

const Proyectos = () => {
    return (
        <section className="proyectos">
            <article className="titulo">
                <h2>Mis proyectos</h2>
            </article>

            <section id="corousel">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={form} className="d-block w-100" alt="..."></img>
                            <a href="https://gitanndie.github.io/Reto-Formulario/"
                                className="badge badge-warning d-md-block" target="_blank">Ver proyecto</a>
                        </div>
                        <div className="carousel-item">
                            <img src={hamacas} className="d-block w-100" alt="..."></img>
                            <a href="https://gitanndie.github.io/LandingPage/#video"
                                className="badge badge-warning d-md-block" target="_blank">Ver proyecto</a>
                        </div>
                        <div className="carousel-item">
                            <img src={queen} className="d-block w-100" alt="..."></img>
                            <a href="https://gitanndie.github.io/Reto-Tributo/"
                                className="badge badge-warning d-md-block" target="_blank">Ver proyecto</a>
                        </div>
                        <div className="carousel-item">
                            <img src={tecnico} className="d-block w-100" alt="..."></img>
                            <a href="https://gitanndie.github.io/DocumentoTecnico/"
                                className="badge badge-warning d-md-block" target="_blank">Ver proyecto</a>
                        </div>
                        <div className="carousel-item">
                            <img src={Fylo} className="d-block w-100" alt="..."></img>
                            <a href="https://eloquent-dubinsky-a02ef0.netlify.app/"
                                className="badge badge-warning d-md-block" target="_blank">Ver proyecto</a>
                        </div>
                        <div className="carousel-item">
                            <img src={Caja} className="d-block w-100" alt="..."></img>
                            <a href="https://gitanndie.github.io/CajaRegistradora/"
                                className="badge badge-warning d-md-block" target="_blank">Ver proyecto</a>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button"
                        data-slide="prev">
                        <span className="carousel-control-prev-icon p-3 mb-2 bg-danger text-white"
                            aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button"
                        data-slide="next">
                        <span className="carousel-control-next-icon p-3 mb-2 bg-danger text-white"
                            aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </section>
        </section>
    );
}

export default Proyectos;