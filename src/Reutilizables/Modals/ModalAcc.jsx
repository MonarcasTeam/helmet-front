import React from 'react'
import Button from 'react-bootstrap/Button';
import { TablaMulta } from '../Tablas/TablaMulta.jsx';

export const ModalAcc = ({ setStateAcc }) => {

    const closeAcc = () => {
        setStateAcc(false);
    }

    return (
        <div className="cuerpoModal animate__animated animate__fadeIn">
            <div className="contModal">
                <h2 className="titModal">Registro de Multas</h2>
                <div className="tablaModal">
                    <TablaMulta />
                </div>
                <Button className="animate__animated" onClick={closeAcc} variant="outline-success">Cerrar</Button>
            </div>
        </div>
    )
}
