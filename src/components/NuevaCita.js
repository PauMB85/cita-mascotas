import React, { Component } from 'react';

class NuevaCita extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Rellenar formulario para una nueva cita
                    </h2>
                    <form>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre mascota
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre mascota"
                                    name="mascota"
                                />
                            </div>
                        </div> {/*form-group*/}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Propietario
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre propietario"
                                    name="propietario"
                                />
                            </div>
                        </div> {/*form-group*/}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Fecha
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="date"
                                    className="form-control"
                                    placeholder="Fecha"
                                    name="fecha"
                                />
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Hora
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="time"
                                    className="form-control"
                                    placeholder="Hora"
                                    name="hora"
                                />
                            </div>
                        </div> {/*form-group*/}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Síntomas
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea 
                                    type="text"
                                    className="form-control"
                                    placeholder="Descripción de los síntomas"
                                    name="sintomas"
                                ></textarea>
                            </div>
                        </div> {/*form-group*/}

                        <input type="submit" value="Agregar Nueva Cita" className="py-3 mt-2 btn btn-success btn-block"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default NuevaCita;