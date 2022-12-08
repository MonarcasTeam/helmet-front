import React from 'react'
import 'antd/dist/antd.css'
import "../estilos.css"
import { HomeButtonAdmin } from '../Reutilizables/Botones/HomeButtonAdmin.jsx'
import { TablaPagoClientes } from '../Reutilizables/Tablas/TablaPagoClientes'
import { BarraBuscarCli } from '../Reutilizables/BarraBuscarCli'
import { TablaSolicitudCli } from '../Reutilizables/Tablas/TablaSolicitudCli'

export const SoliClientesF = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <h3 className="usersTitle">
                    Solicitudes de clientes
                </h3>
                <div className="buscar">
                    <BarraBuscarCli />
                </div>
                <TablaSolicitudCli />
                <div className="buttonHomeTab">
                    <HomeButtonAdmin />
                </div>
            </div>
        </div>
    )
}
