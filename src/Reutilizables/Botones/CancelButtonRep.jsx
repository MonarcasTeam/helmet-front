import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const CancelButtonRep = () => {
  return (
    <div>
        <Button variant="danger"><Link to="/prof/RepCli">Cancelar</Link></Button>
    </div>
  )
}
