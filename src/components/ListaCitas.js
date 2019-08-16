import React from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

const ListaCitas = ({citas, eliminarCita}) => {
    return (
        <div className="card mt-5 py-5">
            <div className="card-body">
                <h2 className="card-title text-center">
                    Administrar las citas
                </h2>
                <div className="lista-citas">
                    {citas.map(cita => (
                        <Cita
                            key={cita.id}
                            cita={cita}
                            eliminarCita={eliminarCita}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

ListaCitas.propTypes = {
    citas : PropTypes.array.isRequired,
    eliminarCita : PropTypes.func.isRequired
}

export default ListaCitas;