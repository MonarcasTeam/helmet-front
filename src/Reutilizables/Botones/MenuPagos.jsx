import React, { useState } from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Link } from "react-router-dom";
import { ModalPago } from '../Modals/ModalPago';

export const MenuPagos = () => {

    const [stateModal, setStateModal] = useState(false);

    const showModal = () => {
        // setTimeout( () => {
            setStateModal(true);
        // }, 5000 );  
    }

    return (
        <div>


            {
                (stateModal) ? "" : 

            <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
                <ToggleButton onClick={showModal} id="tbg-check-1" variant="success" value={2}>
                    Detalle pago
                </ToggleButton>
                <ToggleButton id="tbg-check-2" variant="success" value={2}>
                    <Link to="/admin/BackPago">Volver</Link>
                </ToggleButton>
            </ToggleButtonGroup>
                
            }


            {
                (stateModal) ? <ModalPago setStateModal={setStateModal} />:""
            }
        </div>
    )
}
