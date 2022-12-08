import React from 'react'
import Button from 'react-bootstrap/Button';
import { TablaInf } from '../Tablas/TablaInf.jsx';

export const ModalInf = ({ setStateInf }) => {

    const closeInf = () => {
        setStateInf(false);
    }

    return (
        <div className="cuerpoModal animate__animated animate__fadeIn">
            <div className="contModal">
                <h2 className="titModal">Registro de Informes</h2>
                <div className="tablaModal">
                    <TablaInf />
                </div>
                <Button className="animate__animated" onClick={closeInf} variant="success">Cerrar</Button>
            </div>
        </div>
    )
}
