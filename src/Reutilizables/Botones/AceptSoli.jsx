import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const AceptSoli = () => {
  return (
    <div>
        <Button variant="success"><Link to="/cli/ReportClientesS">Aceptar</Link></Button>
    </div>
  )
}
