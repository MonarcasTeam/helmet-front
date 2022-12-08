import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const BackButtonReport = () => {
  return (
    <div>
        <Button variant="success"><Link to="/cli/ReportClientes">Volver</Link></Button>
    </div>
  )
}
