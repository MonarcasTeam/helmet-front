import React from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Link } from "react-router-dom";

export const MenuClieA = () => {

    return (
        <div>
            <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
                <ToggleButton id="tbg-check-1" variant="success" value={2}>
                <Link to="/admin/NewClient">Nuevo cliente</Link>
                </ToggleButton>
                <ToggleButton id="tbg-check-2" variant="success" value={2}>
                    <Link to="/admin/listClient">Ver clientes</Link>
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    )
}
