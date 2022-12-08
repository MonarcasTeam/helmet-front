import React from 'react'
import 'antd/dist/antd.css'
import "../estilos.css"
import { Result } from 'antd';
import { HomeButtonProf } from '../Reutilizables/Botones/HomeButtonProf';
import { BackButtonRep } from '../Reutilizables/Botones/BackButtonRep';

export const RepSucess = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <div className="TittleAcc">
                    <Result
                        status="success"
                        title="Reporte Nº xxxx enviado con éxito"
                    />
                    <h4>Se ha enviado un correo al cliente informando sobre la emisión del reporte.</h4>
                    <br />
                </div>
                <div className="buttons">
                    <BackButtonRep />
                </div>
                <div className="homeB">
                    <HomeButtonProf />
                </div>
            </div>
        </div>
    )
}
