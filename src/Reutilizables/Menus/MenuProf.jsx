import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import React from 'react'
import '../estReu.css'
import 'antd/dist/antd.css'

export const MenuProf = () => {
  return (
    <div className="contMenu">
      <ul className="contMenuL">
        <li className="accidentes p-1">
          <Button variant="success"><Link to="/prof/AccProf">Accidentes</Link></Button>
        </li>
        <li className="clientes p-1">
          <Button variant="success"><Link to="/prof/ListClientes">Clientes</Link></Button>
        </li>
        <li className="reportes p-1">
          <Button variant="success"><Link to="/prof/RepCli">Reportes</Link></Button>
        </li>
      </ul>
    </div >

  )
}
