import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const NewUserButton = () => {
  return (
    <div>
        <Button variant="primary"><Link to="/admin/NewUser">Nuevo usuario</Link></Button>
    </div>
  )
}
