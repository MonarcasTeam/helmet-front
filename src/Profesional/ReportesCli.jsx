import React from 'react'
import 'antd/dist/antd.css'
import "../estilos.css"
import { BarraBuscarCli } from '../Reutilizables/BarraBuscarCli'
import { TablaRepCli } from '../Reutilizables/Tablas/TablaRepCli'
import { NewReportButton } from '../Reutilizables/Botones/NewReportButton'
import { HomeButtonProf } from '../Reutilizables/Botones/HomeButtonProf'

export const ReportesCli = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <div className="botonNuevoUsuario">
                    <NewReportButton />
                </div>
                <h3 className="usersTitle">
                    Reportes
                </h3>
                <div className="buscar">
                    <BarraBuscarCli />
                </div>
                <TablaRepCli />
                <div className="buttonHome">
                    <HomeButtonProf />
                </div>
            </div>
        </div>
    )
}
