import React from 'react'
import Button from 'react-bootstrap/Button';
import { TablaDetPagos } from '../Tablas/TablaDetPagos';

export const ModalPago = ({ setStateModal }) => {

    const closeModal = () => {
        setStateModal(false);
    }

    return (
        <div className="cuerpoModal animate__animated animate__fadeIn">
            <div className="contModal">
                <h2 className="titModal">Detalle de pagos</h2>
                <div className="tablaModal">
                    <TablaDetPagos />
                </div>
                <Button className="animate__animated" onClick={closeModal} variant="success">Cerrar</Button>
            </div>
        </div>
    )
}
