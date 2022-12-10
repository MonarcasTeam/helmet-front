import React from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Link } from "react-router-dom";

export const MenuAccP = () => {

    return (
        <div>
            <ToggleButtonGroup type="checkbox" defaultValue={[1, 2]} className="mb-2">
                <ToggleButton id="tbg-check-3" variant="success" value={1}>
                    <Link to="/prof/AccProf">Volver</Link>
                </ToggleButton>
                <ToggleButton id="tbg-check-2" variant="danger" value={2}>
                    Contactar cliente
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    )
}
