import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const CancelButtonC = () => {
  return (
    <div>
        <Button variant="danger"><Link to="/admin/listClient">Cancelar</Link></Button>
    </div>
  )
}