import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
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
        <li className="det_clientes p-1">
          {['end'].map((direction) => (
            <DropdownButton
              key={direction}
              id={`clientes`}
              drop={direction}
              variant="success"
              title={` Detalle Clientes `}
            >
              <Dropdown.Item eventKey="1"><Link to="/admin/listClient">Clientes</Link></Dropdown.Item>
              <Dropdown.Item eventKey="1"><Link to="/admin/PagosMain">Pagos</Link></Dropdown.Item>
              <Dropdown.Item eventKey="2"><Link to="/admin/accidentabilidad">Accidentabilidad</Link></Dropdown.Item>
              <Dropdown.Item eventKey="3"><Link to="/admin/actividades">Actividades</Link></Dropdown.Item>
            </DropdownButton>
          ))}
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
