import React, { useEffect, useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Link } from "react-router-dom";

export const MenuActividad = () => {

  return (
    <div>
      <ToggleButtonGroup type="checkbox" className="mb-2">
        <ToggleButton id="tbg-check-2" variant="primary" value={1}>
          <Link to="/prof/ReportSucess">
            Guardar actividad
          </Link>
        </ToggleButton>
        <ToggleButton id="tbg-check-1" variant="danger" value={2}>
          <Link to="/prof/ActClientes">
            Cancelar
          </Link>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}
