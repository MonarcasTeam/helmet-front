import React from 'react'
import 'antd/dist/antd.css'
import "../estilos.css"
import { BarraBuscarCli } from '../Reutilizables/BarraBuscarCli'
import { TablaListClientes } from '../Reutilizables/Tablas/TablaListClientes'
import { HomeButtonProf } from '../Reutilizables/Botones/HomeButtonProf'

export const ListClientes = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <h3 className="usersTitle">
                    Clientes
                </h3>
                <div className="buscar">
                    <BarraBuscarCli />
                </div>
                <TablaListClientes />
                <div className="buttonHome">
                    <HomeButtonProf />
                </div>
            </div>
        </div>
    )
}
