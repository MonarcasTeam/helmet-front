import React from 'react'
import { Alert } from 'antd';
import { Progress, Tooltip } from 'antd';
import { red, green } from '@ant-design/colors'

export const ContAdministrador = () => {

  return (
    <div>
      <div className="boxOne">
        <div className="oneTitle">
          <h5>Clientes</h5>
        </div>
        <br />
        <div className="contOne">
          <Alert
            message="32 clientes"
            description="Clientes nuevos : 4"
            type="success"
            showIcon
          />
        </div>
      </div>
      <div className="boxTwo">
        <div className="twoTitle">
          <h5>Capacitaciones</h5>
        </div>
        <div className="contTwo">
          <Alert
            message="27 capacitaciones"
            description="Capacitaciones nuevas : 3 Capacitaciones pendientes : 4"
            type="info"
            showIcon
          />
        </div>
      </div>
      <div className="boxThree">
        <div className="threeTitle">
          <h5>Solicitudes</h5>
        </div>
        <div className="contThree">
          <Tooltip title="Capacitaciones / Asesorías">
            <Progress
              percent={100}
              success={{
                percent: 50,
              }}
              type="dashboard"
            />
          </Tooltip>
          <table className='infoGrafico'>
            <tr>
              <td><h7>Capacitaciones</h7></td>
              <td><Progress percent={50} steps={5} strokeColor={green[6]} /></td>
            </tr>
            <tr>
              <td><h7>Asesorías</h7></td>
              <td><Progress percent={50} steps={5} /></td>
            </tr>
          </table>
        </div>
      </div >
      <div className="boxFour">
        <div className="fourTitle">
          <h5>Pagos de clientes</h5>
        </div>
        <div className="contFour">
          <Tooltip title="Al día / Pendientes">
            <Progress
              percent={100}
              strokeColor={red[6]}
              success={{
                percent: 70,
              }}
              type="dashboard"
            />
          </Tooltip>
          <table className='infoGrafico'>
            <tr>
              <td><h7>Al día</h7></td>
              <td><Progress percent={70} steps={5} strokeColor={green[6]} /></td>
            </tr>
            <tr>
              <td><h7>Pendientes</h7></td>
              <td><Progress percent={30} steps={5} strokeColor={red[6]}/></td>
            </tr>
          </table>
        </div>
      </div>
    </div >
  )
}
