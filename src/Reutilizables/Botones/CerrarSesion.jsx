import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { ModalCerSesion } from '../Modals/ModalCerSesion';

export const CerrarSesion = () => {

  const [stateCerSesion, setStateCerSesion] = useState(false);

  const showCerSesion = () => {
    // setTimeout( () => {
    setStateCerSesion(true);
    // }, 5000 );  
  }

  return (
    <div>
      
      <Button onClick={showCerSesion} variant="success">Cerrar sesión</Button>

      {
        (stateCerSesion) ? <ModalCerSesion setStateCerSesion={setStateCerSesion} /> : ""
      }

    </div>
  )
}