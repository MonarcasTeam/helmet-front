import React from 'react'
import 'antd/dist/antd.css'
import "../estilos.css"
import { HomeButtonCli } from '../Reutilizables/Botones/HomeButtonCli'
import { TablaReport } from '../Reutilizables/Tablas/TablaReport'

export const ReportClientes = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <h1 className="reportTitle">
                    Reportes
                </h1>
                <div className="tabReportes">
                    <TablaReport />
                </div>
                <div className="buttonHome">
                    <HomeButtonCli />
                </div>
            </div>
        </div>
    )
}
