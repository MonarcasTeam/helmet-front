import React from 'react'
import { Alert } from 'antd';
import { TablaMain } from '../Reutilizables/Tablas/TablaMain';


export const ContCliente = () => {
  return (
    <div>
      <div className="boxOne">
        <div className="oneTitle">
          <h4>Accidentes</h4>
        </div>
        <br />
        <div className="contOne">
          <Alert
            message="47 días"
            description="Sin accidentes."
            type="success"
            showIcon
          />
        </div>
      </div>
      <div className="boxTwo">
        <div className="twoTitle">
          <h4>Capacitaciones</h4>
        </div>
        <div className="contTwos">
          <Alert
            message="27 capacitaciones"
            description="3 capacitaciones nuevas."
            type="info"
            showIcon
          />
        </div>
      </div>
      <div className="boxThreeCli">
        <div className="threeTitleCli">
        <h4>Últimos accidentes reportados</h4>
          <div>
            <TablaMain />
          </div>
        </div>
      </div>
    </div>
  )
}
