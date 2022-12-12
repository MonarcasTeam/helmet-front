import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { SoliEnviada } from '../Modals/SoliEnviada';

export const SendSoli = () => {

  const [stateSoliEnviada, setStateSoliEnviada] = useState(false);

  const showSoliEnviada = () => {
    // setTimeout( () => {
    setStateSoliEnviada(true);
    // }, 5000 );  
  }

  return (
    <div>
      {
        (stateSoliEnviada) ? "" :

          <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
            <ToggleButton onClick={showSoliEnviada} id="tbg-check-1" variant="primary" value={2}>
              Guardar
            </ToggleButton>
            <ToggleButton id="tbg-check-2" variant="success" value={2}>
              <Link to="/cli/SolicitudClienteF">Volver</Link>
            </ToggleButton>
          </ToggleButtonGroup>
      }

      {
        (stateSoliEnviada) ? <SoliEnviada setStateSoliEnviada={setStateSoliEnviada} /> : ""
      }
    </div>
  )
}
