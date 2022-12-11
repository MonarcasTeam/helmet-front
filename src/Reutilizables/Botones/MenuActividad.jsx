import React, { useEffect, useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Link } from "react-router-dom";
import { NewActividad } from '../Modals/NewActividad';

export const MenuActividad = () => {

  const [stateNewActividad, setStateNewActividad] = useState(false);

  const showNewActividad = () => {
    // setTimeout( () => {
    setStateNewActividad(true);
    // }, 5000 );  
  }

  return (
    <div>
      {
        (stateNewActividad) ? "" :

      <ToggleButtonGroup type="checkbox" className="mb-2">
        <ToggleButton onClick={showNewActividad} id="tbg-check-2" variant="primary" value={1}>
            Guardar actividad
        </ToggleButton>
        <ToggleButton id="tbg-check-1" variant="danger" value={2}>
          <Link to="/prof/ActClientes">
            Cancelar
          </Link>
        </ToggleButton>
      </ToggleButtonGroup>
      }

      {
        (stateNewActividad) ? <NewActividad setStateNewActividad={setStateNewActividad} /> : ""
      }

    </div>
  )
}
