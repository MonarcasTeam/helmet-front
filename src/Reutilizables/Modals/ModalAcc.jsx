import React from 'react'
import Button from 'react-bootstrap/Button';
import { TablaAccidentes } from '../Tablas/TablaAccidentes.jsx';

export const ModalAcc = ({ setStateAcc }) => {

    const closeAcc = () => {
        setStateAcc(false);
    }

    return (
        <div className="cuerpoModal animate__animated animate__fadeIn">
            <div className="contModal">
                <h2 className="titModal">Registro de Accidentes</h2>
                <div className="tablaModal">
                    <TablaAccidentes />
                </div>
                <Button className="animate__animated" onClick={closeAcc} variant="success">Cerrar</Button>
            </div>
        </div>
    )
}
