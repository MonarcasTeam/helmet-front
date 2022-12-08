import React from 'react'
import Button from 'react-bootstrap/Button';
import { TablaImp } from '../Tablas/TablaImp.jsx';

export const ModalImp = ({ setStateImp }) => {

    const closeImp = () => {
        setStateImp(false);
    }

    return (
        <div className="cuerpoModal animate__animated animate__fadeIn">
            <div className="contModal">
                <h2 className="titModal">Registro de Implementaciones</h2>
                <div className="tablaModal">
                    <TablaImp />
                </div>
                <Button className="animate__animated" onClick={closeImp} variant="success">Cerrar</Button>
            </div>
        </div>
    )
}
