import React from 'react'
import 'antd/dist/antd.css'
import "../estilos.css"
import { ContProfesional } from './ContProfesional'

export const HelmetHomePro = () => {
  return (
    <div className="cuerpo">
      
      <div className="contenedor">
        <ContProfesional />
      </div>
    </div>
  )
}
