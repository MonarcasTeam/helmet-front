import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { NuevoAccidente } from '../Modals/NuevoAccidente';

export const SendButton = () => {

  const [stateNewAccident, setStateNewAccident] = useState(false);

  const showNewAccident = () => {
    // setTimeout( () => {
    setStateNewAccident(true);
    // }, 5000 );  
  }

  return (
    <div>
      {
        (stateNewAccident) ? "" :

          <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
            <ToggleButton onClick={showNewAccident} id="tbg-check-1" variant="primary" value={2}>
              Enviar
            </ToggleButton>
            <ToggleButton id="tbg-check-2" variant="danger" value={2}>
              <Link to="/cli/AccCli">Cancelar</Link>
            </ToggleButton>
          </ToggleButtonGroup>
      }

      {
        (stateNewAccident) ? <NuevoAccidente setStateNewAccident={setStateNewAccident} /> : ""
      }
    </div>
  )
}
