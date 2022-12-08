import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const BackButtonC = () => {
  return (
    <div>
        <Button variant="success"><Link to="/cli/AccCli">Volver</Link></Button>
    </div>
  )
}
