import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const BackButtonP = () => {
  return (
    <div>
        <Button variant="success"><Link to="/prof/AccProf">Volver</Link></Button>
    </div>
  )
}
