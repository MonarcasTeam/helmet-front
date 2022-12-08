import React from 'react'
import 'antd/dist/antd.css'
import "../estilos.css"
import { HomeButtonAdmin } from '../Reutilizables/Botones/HomeButtonAdmin.jsx'
import { BarraBuscarCli } from '../Reutilizables/BarraBuscarCli'
import { TablaActClientes } from '../Reutilizables/Tablas/TablaActClientes'

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
                <div className="buttonHome">
                    <HomeButtonAdmin />
                </div>
            </div>
        </div>
    )
}
