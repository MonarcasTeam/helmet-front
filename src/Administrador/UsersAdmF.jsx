import React from 'react'
import 'antd/dist/antd.css'
import "../estilos.css"
import { HomeButtonAdmin } from '../Reutilizables/Botones/HomeButtonAdmin.jsx'
import { MenuUserA } from '../Reutilizables/Menus/MenuUserA'

export const UsersAdmF = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <MenuUserA />
                <div className="buttonHome">
                    <HomeButtonAdmin />
                </div>
            </div>
        </div>
    )
}
