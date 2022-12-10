import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const NewClientButton = () => {
  return (
    <div>
        <Button variant="primary"><Link to="/admin/NewClient">Nuevo cliente</Link></Button>
    </div>
  )
}
