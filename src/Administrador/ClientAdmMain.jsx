import React from 'react'
import 'antd/dist/antd.css'
import "../estilos.css"
import { HomeButtonAdmin } from '../Reutilizables/Botones/HomeButtonAdmin.jsx'
import { BarraBuscarCli } from '../Reutilizables/BarraBuscarCli'
import { NewClientButton } from '../Reutilizables/Botones/NewClientButton'
import { TablaClientes } from '../Reutilizables/Tablas/TablaClientes'

export const ClientAdmMain = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <div className="botonNuevoUsuario">
                    <NewClientButton />
                </div>
                <h3 className="usersTitle">
                    Listado de clientes
                </h3>
                <div className="buscar">
                    <BarraBuscarCli />
                </div>
                <TablaClientes />
                <div className="buttonHome">
                    <HomeButtonAdmin />
                </div>
            </div>
        </div>
    )
}
