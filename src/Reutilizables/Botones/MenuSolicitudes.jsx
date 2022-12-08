import React, { useState } from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Link } from "react-router-dom";
import { ModalAprobar } from '../Modals/ModalAprobar';
import { ModalRechazar } from '../Modals/ModalRechazar';

export const MenuSolicitudes = () => {

    const [stateAprobar, setStateAprobar] = useState(false);

    const showAprobar = () => {
        // setTimeout( () => {
            setStateAprobar(true);
        // }, 5000 );  
    }

    const [stateRechazar, setStateRechazar] = useState(false);

    const showRechazar = () => {
        // setTimeout( () => {
            setStateRechazar(true);
        // }, 5000 );  
    }


    return (
        <div>
            {
                (stateAprobar) ? "" : 

            <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
                <ToggleButton id="tbg-check-2" variant="success" value={1}>
                    <Link to="/admin/SoliClienteF">Volver</Link>
                </ToggleButton>
                <ToggleButton onClick={showAprobar} id="tbg-check-3" variant="primary" value={2}>
                    Aprobar
                </ToggleButton>
                <ToggleButton onClick={showRechazar} id="tbg-check-3" variant="danger" value={3}>
                    Rechazar
                </ToggleButton>
            </ToggleButtonGroup>
                
            }

            {
                (stateAprobar) ? <ModalAprobar setStateAprobar={setStateAprobar} />:""
            }
            {
                (stateRechazar) ? <ModalRechazar setStateRechazar={setStateRechazar} />:""
            }
        </div>
    )
}
