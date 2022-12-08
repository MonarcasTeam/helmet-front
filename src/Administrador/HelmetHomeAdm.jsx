import React from 'react'
import 'antd/dist/antd.css'
import { ContAdministrador } from './ContAdministrador'
import "../estilos.css"
import "../Reutilizables/estModal.css"

export const HelmetHomeAdm = () => {
  return (
    <div className="cuerpo">
      <div className="contenedor">
        <ContAdministrador />
      </div>
    </div>
  )
}
