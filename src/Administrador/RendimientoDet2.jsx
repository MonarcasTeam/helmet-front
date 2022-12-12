import React from 'react'
import { Progress, Tooltip } from 'antd';
import 'antd/dist/antd.css'
import "../estilos.css"
import { HomeButtonAdmin } from '../Reutilizables/Botones/HomeButtonAdmin'
import { BackButtonRend } from '../Reutilizables/Botones/BackButtonRend';

export const RendimientoDet2 = () => {

    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <div className="titContenedor">
                    <h2>Rendimiento Profesional 2</h2>
                </div>
                <div className="titEmpresa">
                    <h4>Cliente 1</h4>
                </div>
                <div className="rendEmpresa">
                    <div className="accContent">
                        <dl>
                            <dd><Tooltip title="Capacitaciones"><Progress strokeColor="red" percent={73} /></Tooltip></dd>
                            <dd><Tooltip title="Accidentes"><Progress strokeColor="orange" percent={27} /></Tooltip></dd>
                        </dl>
                        <br />
                        <dl>
                            <dd><Tooltip title="Asesorías"><Progress strokeColor="blue" percent={38} /></Tooltip></dd>
                            <dd><Tooltip title="Implementaciones"><Progress strokeColor="green" percent={62} /></Tooltip></dd>
                        </dl>
                    </div>
                    <div className="listCliAcc">
                        <dl>
                            <dd>Capacitaciones</dd>
                            <dd>Accidentes</dd>
                        </dl>
                        <br />
                        <dl>
                            <dd>Asesorías</dd>
                            <dd>Implementaciones</dd>
                        </dl>
                    </div>
                </div>
                <div className="titEmpresa">
                    <h4>Cliente 2</h4>
                </div>
                <div className="rendEmpresa">
                    <div className="accContent">
                        <dl>
                            <dd><Tooltip title="Capacitaciones"><Progress strokeColor="red" percent={81} /></Tooltip></dd>
                            <dd><Tooltip title="Accidentes"><Progress strokeColor="orange" percent={10} /></Tooltip></dd>
                        </dl>
                        <br />
                        <dl>
                            <dd><Tooltip title="Asesorías"><Progress strokeColor="blue" percent={42} /></Tooltip></dd>
                            <dd><Tooltip title="Implementaciones"><Progress strokeColor="green" percent={58} /></Tooltip></dd>
                        </dl>
                    </div>
                    <div className="listCliAcc">
                        <dl>
                            <dd>Capacitaciones</dd>
                            <dd>Accidentes</dd>
                        </dl>
                        <br />
                        <dl>
                            <dd>Asesorías</dd>
                            <dd>Implementaciones</dd>
                        </dl>
                    </div>
                </div>
                <div className="SetButtonsRend">
                    <div className="backRend">
                        <BackButtonRend />
                    </div>
                    <div className="homeRend">
                        <HomeButtonAdmin />
                    </div>
                </div>
            </div>
        </div>
    )
}
