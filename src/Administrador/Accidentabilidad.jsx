import { Progress } from 'antd';
import React from 'react';
import { HomeButtonAdmin } from '../Reutilizables/Botones/HomeButtonAdmin';

export const Accidentabilidad = () => {

    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <div className="titContenedor">
                    <h2>Accidentabilidad</h2>
                </div>
                <div className="accContent">
                    <dl>
                        <dd><Progress percent={50} status="active" /></dd>
                        <dd><Progress percent={50} status="active" /></dd>
                        <dd><Progress percent={50} status="active" /></dd>
                    </dl>
                </div>
                <div className="listCliAcc">
                    <dl>
                        <dd>Empresa 1</dd>
                        <dd>Empresa 2</dd>
                        <dd>Empresa 3</dd>
                    </dl>
                </div>
                <div className="homeAcc">
                    <HomeButtonAdmin />
                </div>
            </div>
        </div>
    )
}
