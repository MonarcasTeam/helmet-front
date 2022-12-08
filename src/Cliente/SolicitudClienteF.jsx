import React from 'react'
import 'antd/dist/antd.css'
import "../estilos.css"
import { HomeButtonCli } from '../Reutilizables/Botones/HomeButtonCli'
import { NuevaSolicitud } from '../Reutilizables/Botones/NuevaSolicitud'
import { TablaSoliCliente } from '../Reutilizables/Tablas/TablaSoliCliente'

export const SolicitudClienteF = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <div className='MenuAcc'>
                    <NuevaSolicitud />
                </div>
                <h2 className="AccTitle">
                    Solicitudes
                </h2>
                <TablaSoliCliente/>
                <div className="buttonHome">
                    <HomeButtonCli />
                </div>
            </div>
        </div>
    )
}
