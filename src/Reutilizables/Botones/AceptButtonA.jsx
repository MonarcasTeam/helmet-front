import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const AceptButtonA = () => {
  return (
    <div>
        <Button variant="success"><Link to="/admin/listUsers">Aceptar</Link></Button>
    </div>
  )
}
