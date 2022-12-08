import React from 'react'
import Button from 'react-bootstrap/Button';
import { TablaVisitas } from '../Tablas/TablaVisitas.jsx';

export const ModalVisitas = ({ setStateVisitas }) => {

    const closeVisitas = () => {
        setStateVisitas(false);
    }

    return (
        <div className="cuerpoModal animate__animated animate__fadeIn">
            <div className="contModal">
                <h2 className="titModal">Registro de Visitas</h2>
                <div className="tablaModal">
                    <TablaVisitas />
                </div>
                <Button className="animate__animated" onClick={closeVisitas} variant="outline-success">Cerrar</Button>
            </div>
        </div>
    )
}
