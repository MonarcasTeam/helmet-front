import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const BackButtonClient = () => {
  return (
    <div>
        <Button variant="success"><Link to="/admin/SubCliente">Volver</Link></Button>
    </div>
  )
}
