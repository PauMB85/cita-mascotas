import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

class App extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      citas: []
    };
  }

  //cuando la aplicación esta cargando
  componentDidMount() {
    const citasLS = localStorage.getItem('citas');
    if(citasLS){
      this.setState({
        citas: JSON.parse(citasLS)
      });
    }
  }

  // cuando agregamos o eliminamos una cita
  componentDidUpdate() {
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  crearNuevaCita = datos => {
    console.log(datos);
    //copiar el state actual
    const citas = [...this.state.citas, datos]
    //agregar el nuevo state
    this.setState({citas})
  }

  //eliminar citas del state
  eliminarCita = id => {
    console.log(id);
    const citasActuales = [...this.state.citas];
    const citas = citasActuales.filter(cita => cita.id !== id);

    this.setState({citas});
  }

  render() {
    return (
      <div className="container">
        <Header titulo='Administrador Pacientes Veterinaria'/>
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita 
              crearNuevaCita={this.crearNuevaCita}
            />
          </div>

          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}
            />
          </div>
        </div>
      </div>
    );
  }


}

export default App;
