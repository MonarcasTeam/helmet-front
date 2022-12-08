import React from 'react'
import Button from 'react-bootstrap/Button';
import { TablaCapa } from '../Tablas/TablaCapa.jsx';

export const ModalCapa = ({ setStateCapa }) => {

    const closeCapa = () => {
        setStateCapa(false);
    }

    return (
        <div className="cuerpoModal animate__animated animate__fadeIn">
            <div className="contModal">
                <h2 className="titModal">Registro de Capacitaciones</h2>
                <div className="tablaModal">
                    <TablaCapa />
                </div>
                <Button className="animate__animated" onClick={closeCapa} variant="success">Cerrar</Button>
            </div>
        </div>
    )
}
