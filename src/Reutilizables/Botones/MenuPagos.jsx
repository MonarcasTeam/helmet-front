import React, { useState } from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Link } from "react-router-dom";
import { ModalPago } from '../Modals/ModalPago';
import { NotificacionPago } from '../Modals/NotificacionPago';

export const MenuPagos = () => {

    const [stateModal, setStateModal] = useState(false);

    const showModal = () => {
        // setTimeout( () => {
            setStateModal(true);
        // }, 5000 );  
    }

    const [stateNotificacion, setStateNotificacion] = useState(false);

    const showNotificacion = () => {
        // setTimeout( () => {
            setStateNotificacion(true);
        // }, 5000 );  
    }

    return (
        <div>


            {
                (stateModal) ? "" : 

            <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
                <ToggleButton id="tbg-check-2" variant="success" value={2}>
                    <Link to="/admin/BackPago">Volver</Link>
                </ToggleButton>
                <ToggleButton onClick={showModal} id="tbg-check-1" variant="primary" value={2}>
                    Detalle pago
                </ToggleButton>
                <ToggleButton onClick={showNotificacion} id="tbg-check-1" variant="danger" value={2}>
                    Enviar notificación
                </ToggleButton>
            </ToggleButtonGroup>
                
            }

            {
                (stateModal) ? <ModalPago setStateModal={setStateModal} />:""
            }
            {
                (stateNotificacion) ? <NotificacionPago setStateNotificacion={setStateNotificacion} />:""
            }
        </div>
    )
}
