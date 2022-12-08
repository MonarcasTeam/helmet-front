import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const AceptButtonB = () => {
  return (
    <div>
        <Button variant="success"><Link to="/admin/listClient">Aceptar</Link></Button>
    </div>
  )
}
