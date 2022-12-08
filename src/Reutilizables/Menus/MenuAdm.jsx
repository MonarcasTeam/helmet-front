import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import React from 'react'
import '../estReu.css'
import 'antd/dist/antd.css'

export const MenuAdm = () => {
  return (
    <div className="contMenu">
      <ul className="contMenuL">
        <li className="actInformacion p-1" >
          <Button variant="success"><Link to="/admin/listUsers">Administrar usuarios</Link></Button>
        </li>
        <li className="actInformacion p-1">
          <Button variant="success"><Link to="/admin/SubCliente">Clientes</Link></Button>
        </li>
        <li className="actInformacion p-1" >
          <Button variant="success"><Link to="/admin/ReportesMain">Reportes de cliente</Link></Button>
        </li>
        <li className="actInformacion p-1" >
          <Button variant="success"><Link to="/admin/RendimientoMain">Rendimiento</Link></Button>
        </li>
      </ul>
    </div >

  )
}
