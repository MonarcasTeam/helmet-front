import React from 'react'
import Button from 'react-bootstrap/Button';
import { TablaMulta } from '../Tablas/TablaMulta.jsx';

export const ModalMulta = ({ setStateMulta }) => {

    const closeMulta = () => {
        setStateMulta(false);
    }

    return (
        <div className="cuerpoModal animate__animated animate__fadeIn">
            <div className="contModal">
                <h2 className="titModal">Registro de Multas</h2>
                <div className="tablaModal">
                    <TablaMulta />
                </div>
                <Button className="animate__animated" onClick={closeMulta} variant="uccess">Cerrar</Button>
            </div>
        </div>
    )
}
