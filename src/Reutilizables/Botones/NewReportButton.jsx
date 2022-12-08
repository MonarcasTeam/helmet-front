import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const NewReportButton = () => {
  return (
    <div>
        <Button variant="success"><Link to="/prof/NewReport">Nuevo reporte</Link></Button>
    </div>
  )
}
