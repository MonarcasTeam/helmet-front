import React, { useState } from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Link } from "react-router-dom";
import { EliminarUser } from '../Modals/EliminarUser';
import { SaveDetailUser } from '../Modals/SaveDetailUser';

export const MenuUserB = () => {

    const [stateSaveDetailUser, setStateSaveDetailUser] = useState(false);

    const showSaveDetailUser = () => {
        // setTimeout( () => {
        setStateSaveDetailUser(true);
        // }, 5000 );  
    }

    const [stateEliminarUser, setStateEliminarUser] = useState(false);

    const showEliminarUser = () => {
        // setTimeout( () => {
        setStateEliminarUser(true);
        // }, 5000 );  
    }

    return (
        <div>
            {
                (stateSaveDetailUser) ? "" :

                    <ToggleButtonGroup type="checkbox" className="mb-2">
                        <ToggleButton onClick={showSaveDetailUser} id="tbg-check-2" variant="primary" value={1}>
                            Guardar cambios
                        </ToggleButton>
                        <ToggleButton id="tbg-check-2" variant="success" value={2}>
                            <Link to="/admin/listUsers">Cancelar</Link>
                        </ToggleButton>
                        <ToggleButton onClick={showEliminarUser} id="tbg-check-2" variant="danger" value={3}>
                            Eliminar usuario
                        </ToggleButton>
                    </ToggleButtonGroup>

            }

            {
                (stateSaveDetailUser) ? <SaveDetailUser setStateSaveDetailUser={setStateSaveDetailUser} /> : ""
            }
            {
                (stateEliminarUser) ? <EliminarUser setStateEliminarUser={setStateEliminarUser} /> : ""
            }
        </div>
    )
}
