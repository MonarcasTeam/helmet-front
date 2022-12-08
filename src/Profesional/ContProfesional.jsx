import React from 'react'
import { Alert } from 'antd';
import { Progress, Tooltip } from 'antd';
import { Link } from "react-router-dom";



export const ContProfesional = () => {
  return (
    <div>
      <div className="boxOne">
        <div className="oneTitle">
          <h5>Accidentes</h5>
        </div>
        <br />
        <div className="contOne">
          <Link to="/accProfS">
            <Alert
              message="IMPORTANTE"
              description="1 nuevo accidente."
              type="warning"
              showIcon
            />
          </Link>
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
          <h5>Clientes</h5>
        </div>
        <div className="contThree">
          <Alert
            message="32 clientes"
            description="Clientes nuevos : 4"
            type="success"
            showIcon
          />
        </div>
      </div>
      <div className="boxFour">
        <div className="fourTitle">
          <h5>Asesorías completadas</h5>
        </div>
        <div className="contFour">
          <Tooltip title="Completadas / Por completar">
            <Progress type="dashboard" percent={76} />
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
