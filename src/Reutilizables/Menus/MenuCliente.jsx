import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import React from 'react'
import '../estReu.css'
import 'antd/dist/antd.css'

export const MenuCliente = () => {
  return (
    <div className="contMenu">
      <ul className="contMenuL">
        <li className="Accidentes p-1" >
          <Button variant="success"><Link to="/cli/AccCli">Accidentes</Link></Button>
        </li>
        <li className="Reportes p-1" >
          <Button variant="success"><Link to="/cli/ReportClientes">Reportes</Link></Button>
        </li>
        <li className="Solicitudes p-1" >
          <Button variant="success"><Link to="/cli/SolicitudClienteF">Solicitudes</Link></Button>
        </li>
        <li>
          <a href="#">
          <img src="/img/helmet-whatsapp.png" alt="helmet_Whatsapp" className="helmetWhatsapp" />
          </a>
        </li>
      </ul>
    </div>

  )
}
