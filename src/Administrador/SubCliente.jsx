import React, { useState } from 'react'
import 'antd/dist/antd.css'
import "../estilos.css"
import Button from 'react-bootstrap/Button';
import { HomeButtonAdmin } from '../Reutilizables/Botones/HomeButtonAdmin';
import { Link } from "react-router-dom";

export const SubCliente = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <div className="codEmpresa">
                    <h2>Clientes</h2>
                </div>
                <table className="SubClieButtons">
                    <tr className="SubCliButtons">
                        <td><Button className="SubCliButtons" variant="success"><Link to="/admin/listClient">Detalle clientes</Link></Button></td>
                        <td><Button className="SubCliButtons" variant="success"><Link to="/admin/PagosMain">Pagos</Link></Button></td>
                    </tr>
                    <br />
                    <tr className="SubCliButtons">
                        <td><Button className="SubCliButtons" variant="success"><Link to="/admin/accidentabilidad">Accidentabilidad</Link></Button></td>
                        <td><Button className="SubCliButtons" variant="success"><Link to="/admin/actividades">Actividades</Link></Button></td>
                    </tr>
                </table>
                <div className="SoliClientes">
                    <Button className="SubCliButtons" variant="success"><Link to="/admin/SoliClienteF">Solicitudes</Link></Button>
                </div>
                <div className="SetButtonsPago">
                    {/* <div className="buttonsPago">
                        <BackButtonAct />
                    </div> */}
                    <div className="homePago">
                        <HomeButtonAdmin />
                    </div>
                </div>
            </div>
        </div>
    )
}