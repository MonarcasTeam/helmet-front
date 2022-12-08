import React from 'react'
import 'antd/dist/antd.css'
import "../estilos.css"
import { HomeButtonAdmin } from '../Reutilizables/Botones/HomeButtonAdmin.jsx'
import { BarraBuscarCli } from '../Reutilizables/BarraBuscarCli'
import { TablaRendProfesionales } from '../Reutilizables/Tablas/TablaRendProfesionales'

export const RendimientoMain = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <h3 className="usersTitle">
                   Indicadores de rendimiento
                </h3>
                <div className="buscar">
                    <BarraBuscarCli />
                </div>
                <TablaRendProfesionales />
                <div className="buttonHome">
                    <HomeButtonAdmin />
                </div>
            </div>
        </div>
    )
}
