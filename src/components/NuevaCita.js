import React, { Component } from 'react';
import uuid from 'uuid';

class NuevaCita extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cita: {
                mascota: '',
                propietario: '',
                fecha: '',
                hora: '',
                sintomas: ''
            },
            error: false
        }
    }

    /**
     * Metodo que controlo los datos del form y rellena el state de la cita
     */
    handleChange = (e) => {
        //indicamos el vlaor introducido por el usuario, recordar que state es inmutable y siempre hay que hacer una copia
        this.setState({
            cita: {
                ...this.state.cita,
                [e.target.name] : e.target.value
            }
        })
    }

    /**
     * El usuario pulsa el botón enviar
     */
    handleSubmit = (e) => {
        e.preventDefault();

        //obtener los valores del state
        const {mascota, propietario, fecha, hora, sintomas} = this.state.cita;

        //validación que todos los campos este llenos
        if(mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '') {
            this.setState({error:true});

            //evitamos que se siga ejecutando
            return;
        }

        //generar objeto con los datos
        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();

        //agremamos la cita al stete padre (en este caso a App)
        this.props.crearNuevaCita(nuevaCita);
    }

    render() {

        const { error } = this.state;

        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Rellenar formulario para una nueva cita
                    </h2>

                    { error ?  <div className="alert alert-danger mt-2 mb-5 text-center">
                            Todos los campos son obligatorios
                        </div> : null}

                    <form
                        onSubmit={this.handleSubmit}
                    >
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
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}
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
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}
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
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
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
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
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
                                    onChange={this.handleChange}
                                    value={this.state.cita.sintomas}
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