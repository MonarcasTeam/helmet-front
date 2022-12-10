import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Link } from "react-router-dom";
import { NuevoCliente } from '../Modals/NuevoCliente';

export const SaveClient = () => {

  const [stateNewClient, setStateNewClient] = useState(false);

  const showNewClient = () => {
    // setTimeout( () => {
    setStateNewClient(true);
    // }, 5000 );  
  }

  return (
    <div>
      {
        (stateNewClient) ? "" :

          <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
            <ToggleButton onClick={showNewClient} id="tbg-check-1" variant="primary" value={2}>
              Guardar
            </ToggleButton>
            <ToggleButton id="tbg-check-2" variant="success" value={2}>
              <Link to="/admin/listClient">Volver</Link>
            </ToggleButton>
          </ToggleButtonGroup>

      }

      {
        (stateNewClient) ? <NuevoCliente setStateNewClient={setStateNewClient} /> : ""
      }
    </div>
  )
}
