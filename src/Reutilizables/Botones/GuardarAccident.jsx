import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { GuardarAccidente } from '../Modals/GuardarAccidente';
import { NuevoCliente } from '../Modals/NuevoCliente';

export const GuardarAccident = () => {

  const [stateSaveAccident, setStateSaveAccident] = useState(false);

  const showSaveAccident = () => {
    // setTimeout( () => {
    setStateSaveAccident(true);
    // }, 5000 );  
  }

  return (
    <div>
      {
        (stateSaveAccident) ? "" :

          <Button onClick={showSaveAccident} variant="primary">Guardar</Button>

      }

      {
        (stateSaveAccident) ? <GuardarAccidente setStateSaveAccident={setStateSaveAccident} /> : ""
      }
    </div>
  )
}
