import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Link } from "react-router-dom";
import { NewReporte } from '../Modals/NewReporte';

export const MenuReport = () => {

  const [stateNewReport, setStateNewReport] = useState(false);

  const showNewReport = () => {
    // setTimeout( () => {
    setStateNewReport(true);
    // }, 5000 );  
  }

  return (
    <div>
      {
        (stateNewReport) ? "" :

          <ToggleButtonGroup type="checkbox" className="mb-2">
            <ToggleButton onClick={showNewReport} id="tbg-check-2" variant="success" value={1}>
                Generar Reporte
            </ToggleButton>
            <ToggleButton id="tbg-check-1" variant="danger" value={2}>
              <Link to="/prof/NewActividad">
                Cancelar
              </Link>
            </ToggleButton>
          </ToggleButtonGroup>
      }

      {
        (stateNewReport) ? <NewReporte setStateNewReport={setStateNewReport} /> : ""
      }

    </div>
  )
}
