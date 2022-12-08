import { Progress } from 'antd';
import React from 'react';
import { BackButtonClient } from '../Reutilizables/Botones/BackButtonClient';
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
                        <dd><Progress percent={40} status="active" strokeColor=""/></dd>
                        <dd><Progress percent={25} status="active" strokeColor="red"/></dd>
                        <dd><Progress percent={30} status="active" strokeColor="green"/></dd>
                        <dd><Progress percent={5} status="active" strokeColor="orange"/></dd>
                    </dl>
                </div>
                <div className="listCliAcc">
                    <dl>
                        <dd>Empresa 1</dd>
                        <dd>Empresa 2</dd>
                        <dd>Empresa 3</dd>
                        <dd>Empresa 4</dd>
                    </dl>
                </div>
                <div className="SetButtonsPago">
                    <div className="buttonsPago">
                        <BackButtonClient />
                    </div>
                    <div className="homePago">
                        <HomeButtonAdmin />
                    </div>
                </div>
            </div>
        </div>
    )
}
