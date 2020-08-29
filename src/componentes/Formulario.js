import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/formulario.css'


function Formulario() {
    return (
        <section>                   
            <form action="/" className="container-fuid">
                <div className="form-group">
                    <label for="name" className="col-sm-10 control-label">¿Como te gusta que te llamen?</label>
                    <div className="col-sm-12">
                        <input type="text" className="form-control input-sm" />
                    </div>
                </div>
                        
                <div className="form-group">
                    <label for="name" id="label" className="col-sm-10 control-label">Aqui, va tu correo</label>
                    <div className="col-sm-12">
                        <input type="text" className="form-control input-sm" />
                    </div>
                </div>
                        
                <div className="form-group">
                    <label for="name" id="label" className="col-sm-10 control-label">¿Que me quieres contar?</label>
                    <div className="col-sm-12">
                        <textarea className="form-control" id="label" ></textarea>
                    </div>
                </div>
                        
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type="button" id="button" className="btn btn-info" value="Mandar Info" />
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Formulario
