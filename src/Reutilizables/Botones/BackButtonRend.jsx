import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const BackButtonRend = () => {
  return (
    <div>
        <Button variant="success"><Link to="/admin/RendimientoMain">Volver</Link></Button>
    </div>
  )
}
