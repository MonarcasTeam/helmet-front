import React from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Link } from "react-router-dom";

export const MenuAccP = () => {

    return (
        <div>
            <ToggleButtonGroup type="checkbox" defaultValue={[4, 6]} className="mb-2">
                <ToggleButton id="tbg-check-2" variant="success" value={5}>
                    Contactar cliente
                </ToggleButton>
                <ToggleButton id="tbg-check-3" variant="success" value={6}>
                    <Link to="/prof/backP">Volver</Link>
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    )
}
