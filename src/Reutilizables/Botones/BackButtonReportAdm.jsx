import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const BackButtonReportAdm = () => {
  return (
    <div>
      <Button variant="success"><Link to="/admin/ReportesMain">Volver</Link></Button>
    </div>
  )
}
