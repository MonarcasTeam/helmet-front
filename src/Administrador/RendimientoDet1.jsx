import React from 'react'
import { Progress, Tooltip } from 'antd';
import 'antd/dist/antd.css'
import "../estilos.css"
import { HomeButtonAdmin } from '../Reutilizables/Botones/HomeButtonAdmin'
import { BackButtonRend } from '../Reutilizables/Botones/BackButtonRend';

export const RendimientoDet1 = () => {

    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <div className="titContenedor">
                    <h2>Accidentabilidad</h2>
                </div>
                <div className="titEmpresa">
                    <h4>Empresa 1</h4>
                </div>
                <div className="rendEmpresa">
                    <div className="accContent">
                        <dl>
                            <dd><Tooltip title="Capacitaciones"><Progress strokeColor="red" percent={50} /></Tooltip></dd>
                            <dd><Tooltip title="Accidentes"><Progress strokeColor="orange" percent={50} /></Tooltip></dd>
                        </dl>
                        <br />
                        <dl>
                            <dd><Tooltip title="Asesorías"><Progress strokeColor="blue" percent={50} /></Tooltip></dd>
                            <dd><Tooltip title="Implementaciones"><Progress strokeColor="green" percent={50} /></Tooltip></dd>
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
                    <h4>Empresa 2</h4>
                </div>
                <div className="rendEmpresa">
                    <div className="accContent">
                        <dl>
                            <dd><Tooltip title="Capacitaciones"><Progress strokeColor="red" percent={50} /></Tooltip></dd>
                            <dd><Tooltip title="Accidentes"><Progress strokeColor="orange" percent={50} /></Tooltip></dd>
                        </dl>
                        <br />
                        <dl>
                            <dd><Tooltip title="Asesorías"><Progress strokeColor="blue" percent={50} /></Tooltip></dd>
                            <dd><Tooltip title="Implementaciones"><Progress strokeColor="green" percent={50} /></Tooltip></dd>
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
