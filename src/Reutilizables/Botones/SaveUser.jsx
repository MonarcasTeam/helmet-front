import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Link } from "react-router-dom";
import { NuevoUser } from '../Modals/NuevoUser';

export const SaveUser = () => {

  const [stateNewUser, setStateNewUser] = useState(false);

  const showNewUser = () => {
      // setTimeout( () => {
          setStateNewUser(true);
      // }, 5000 );  
  }
  return (
    <div>
      {
        (stateNewUser) ? "" :

          <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
            <ToggleButton onClick={showNewUser} id="tbg-check-1" variant="primary" value={2}>
              Guardar
            </ToggleButton>
            <ToggleButton id="tbg-check-2" variant="success" value={2}>
              <Link to="/admin/listUsers">Volver</Link>
            </ToggleButton>
          </ToggleButtonGroup>

      }

      {
        (stateNewUser) ? <NuevoUser setStateNewUser={setStateNewUser} /> : ""
      }
    </div>
  )
}
