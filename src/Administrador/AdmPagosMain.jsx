import React from 'react'
import 'antd/dist/antd.css'
import "../estilos.css"
import { HomeButtonAdmin } from '../Reutilizables/Botones/HomeButtonAdmin.jsx'
import { TablaPagoClientes } from '../Reutilizables/Tablas/TablaPagoClientes'
import { BarraBuscarCli } from '../Reutilizables/BarraBuscarCli'

export const AdmPagosMain = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <h3 className="usersTitle">
                    Pagos de clientes
                </h3>
                <div className="buscar">
                    <BarraBuscarCli />
                </div>
                <TablaPagoClientes />
                <div className="buttonHome">
                    <HomeButtonAdmin />
                </div>
            </div>
        </div>
    )
}
