import React from 'react'
import { Link } from "react-router-dom";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

export const BackButtonCli = () => {
  return (
    <div>
      <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
        <ToggleButton id="tbg-check-2" variant="success" value={1}>
          <Link to="/prof/ListClientes">
            Volver
          </Link>
        </ToggleButton>
        <ToggleButton id="tbg-check-1" variant="primary" value={2}>
        <Link to="/prof/NewActividad">
          Nueva actividad
        </Link>
        </ToggleButton>

      </ToggleButtonGroup>
    </div>
  )
}
