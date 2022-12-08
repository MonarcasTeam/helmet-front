import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const BackButtonCli = () => {
  return (
    <div>
        <Button variant="success"><Link to="/prof/ListClientes">Volver</Link></Button>
    </div>
  )
}
