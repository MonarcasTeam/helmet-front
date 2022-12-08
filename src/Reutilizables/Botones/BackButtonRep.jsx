import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const BackButtonRep = () => {
  return (
    <div>
        <Button variant="success"><Link to="/prof/RepCli">Volver</Link></Button>
    </div>
  )
}
