import React from 'react'
import Button from 'react-bootstrap/Button';
import { TablaAse } from '../Tablas/TablaAse.jsx';

export const ModalAse = ({ setStateAse }) => {

    const closeAse = () => {
        setStateAse(false);
    }

    return (
        <div className="cuerpoModal animate__animated animate__fadeIn">
            <div className="contModal">
                <h2 className="titModal">Registro de Asesorías</h2>
                <div className="tablaModal">
                    <TablaAse />
                </div>
                <Button className="animate__animated" onClick={closeAse} variant="outline-success">Cerrar</Button>
            </div>
        </div>
    )
}
