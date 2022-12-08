import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const CancelSoli = () => {
  return (
    <div>
        <Button variant="danger"><Link to="/cli/SolicitudClienteF">Cancelar</Link></Button>
    </div>
  )
}
