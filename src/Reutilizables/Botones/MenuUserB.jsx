import React from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Link } from "react-router-dom";

export const MenuUserB = () => {

    return (
        <div>
            <ToggleButtonGroup type="checkbox" className="mb-2">
            <ToggleButton id="tbg-check-2" variant="primary" value={1}>
                    <Link to="/admin/saveDetailUser">Guardar cambios</Link>
                </ToggleButton>
                <ToggleButton id="tbg-check-2" variant="success" value={2}>
                    <Link to="/admin/listUsers">Cancelar</Link>
                </ToggleButton>
                <ToggleButton id="tbg-check-2" variant="danger" value={3}>
                    Eliminar usuario
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    )
}
