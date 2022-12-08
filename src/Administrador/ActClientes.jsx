import React from 'react'
import 'antd/dist/antd.css'
import "../estilos.css"
import { HomeButtonAdmin } from '../Reutilizables/Botones/HomeButtonAdmin.jsx'
import { BarraBuscarCli } from '../Reutilizables/BarraBuscarCli'
import { TablaActClientes } from '../Reutilizables/Tablas/TablaActClientes'
import { BackButtonClient } from '../Reutilizables/Botones/BackButtonClient'

export const ActClientes = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <h3 className="usersTitle">
                    Actividades de clientes
                </h3>
                <div className="buscar">
                    <BarraBuscarCli />
                </div>
                <TablaActClientes />
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
