import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const BackButtonAct = () => {
  return (
    <div>
        <Button variant="success"><Link to="/admin/BackAct">Volver</Link></Button>
    </div>
  )
}
