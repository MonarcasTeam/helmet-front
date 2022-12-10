import React from 'react'
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Link } from "react-router-dom";

export const BackButtonReport = () => {
  return (
    <div>
      <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
        <ToggleButton id="tbg-check-1" variant="success" value={2}>
          <Link to="/cli/ReportClientes">Volver</Link>
        </ToggleButton>
        <ToggleButton id="tbg-check-2" variant="primary" value={2}>
          Descargar
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}
