import React from 'react'
import 'antd/dist/antd.css'
import "../estilos.css"
import { HomeButtonAdmin } from '../Reutilizables/Botones/HomeButtonAdmin';
import { MenuPagos } from '../Reutilizables/Botones/MenuPagos';

export const AdmPagosDetail1 = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <div className="codEmpresa">
                    <h2>Empresa #100001</h2>
                </div>
                <div className="estServicio">
                    <tr>
                        <td><h3>Servicio :</h3></td>
                        <td><h3><img src="/img/check.png" alt="" className="CheckImg"/> Activo</h3></td>
                    </tr>
                </div>
                <table className="pagoDetail">
                    <tr>
                        <td><b>Empresa :</b></td>
                        <td>Mercadolibre CL</td>
                        <td><b>Estado de pago :</b></td>
                        <td>Al día</td>
                    </tr>
                    <br />
                    <tr>
                        <td><b>Rut empresa :</b></td>
                        <td>11.111.111-1</td>
                        <td><b>Fecha último pago :</b></td>
                        <td>03/09/2022</td>
                    </tr>
                    <br />
                    <tr>
                        <td><b>Contacto empresa :</b></td>
                        <td>Peter Parker</td>
                        <td><b>Profesional a cargo :</b></td>
                        <td>Verónica Proboste</td>
                    </tr>
                    <br />
                    <tr>
                        <td><b>Correo eléctrónico :</b></td>
                        <td>pparker@mercadolibre.cl</td>
                        <td><b>Notificaciones enviadas :</b></td>
                        <td>0</td>
                    </tr>
                    <br />
                    <tr>
                        <td><b>Fecha de pago :</b></td>
                        <td>05/09/2022</td>
                        <td><b>Última notificación :</b></td>
                        <td>N/A</td>
                    </tr>
                </table>
                <div className="SetButtonsPago">
                    <div className="buttonsPago">
                        <MenuPagos />
                    </div>
                    <div className="homePago">
                        <HomeButtonAdmin />
                    </div>
                </div>
            </div>
        </div>
    )
}
