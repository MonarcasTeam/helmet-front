import React from 'react'
import 'antd/dist/antd.css'
import "../estilos.css"
import { MenuAccC } from '../Reutilizables/Botones/MenuAccC'
import { HomeButtonCli } from '../Reutilizables/Botones/HomeButtonCli'
import { TablaMain } from '../Reutilizables/Tablas/TablaMain'

export const AccClienteF = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <div className='MenuAcc'>
                    <MenuAccC />
                </div>
                <h3 className="AccTitle">
                    Accidentes
                </h3>
                <TablaMain />
                <div className="buttonHome">
                    <HomeButtonCli />
                </div>
            </div>
        </div>
    )
}
