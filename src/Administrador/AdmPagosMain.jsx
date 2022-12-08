import React from 'react'
import 'antd/dist/antd.css'
import "../estilos.css"
import { HomeButtonAdmin } from '../Reutilizables/Botones/HomeButtonAdmin.jsx'
import { TablaPagoClientes } from '../Reutilizables/Tablas/TablaPagoClientes'
import { BarraBuscarCli } from '../Reutilizables/BarraBuscarCli'
import { BackButtonClient } from '../Reutilizables/Botones/BackButtonClient'

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
                <div className="SetButtonsPago">
                    <div className="buttonsPago">
                        <BackButtonClient />
                    </div>
                    <div className="homePago">
                        <HomeButtonAdmin />
                    </div>
                </div>
            </div>
        </div>
    )
}
