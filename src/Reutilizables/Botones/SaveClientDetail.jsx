import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Link } from "react-router-dom";
import { DetalleCliente } from '../Modals/DetalleCliente';
import { EliminarCliente } from '../Modals/EliminarCliente';

export const SaveClientDetail = () => {

  const [stateDetailClient, setStateDetailClient] = useState(false);

  const showDetailClient = () => {
    // setTimeout( () => {
    setStateDetailClient(true);
    // }, 5000 );  
  }

  const [stateEraseClient, setStateEraseClient] = useState(false);

  const showEraseClient = () => {
    // setTimeout( () => {
    setStateEraseClient(true);
    // }, 5000 );  
  }

  return (
    <div>
      {
        (stateDetailClient) ? "" :

          <ToggleButtonGroup type="checkbox" className="mb-2">
            <ToggleButton onClick={showDetailClient} id="tbg-check-1" variant="primary" value={1}>
              Guardar cambios
            </ToggleButton>
            <ToggleButton onClick={showEraseClient} id="tbg-check-2" variant="danger" value={2}>
              Eliminar cliente
            </ToggleButton>
            <ToggleButton id="tbg-check-2" variant="success" value={3}>
              <Link to="/admin/listClient">Volver</Link>
            </ToggleButton>
          </ToggleButtonGroup>

      }

      {
        (stateDetailClient) ? <DetalleCliente setStateDetailClient={setStateDetailClient} /> : ""
      }

      {
        (stateEraseClient) ? <EliminarCliente setStateEraseClient={setStateEraseClient} /> : ""
      }
    </div>
  )
}
