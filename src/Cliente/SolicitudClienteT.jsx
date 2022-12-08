import React from 'react'
import 'antd/dist/antd.css'
import "../estilos.css"
import { Result } from 'antd';
import { BackButtonC } from '../Reutilizables/Botones/BackButtonC';
import { HomeButtonCli } from '../Reutilizables/Botones/HomeButtonCli';
import { AceptSoli } from '../Reutilizables/Botones/AceptSoli';

export const SolicitudClienteT = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <div className="TittleAcc">
                    <Result
                        status="success"
                        title="Solicitud enviada con éxito"
                    />
                </div>
                <div className="SoliDetail">
                    <p>
                        Se ha enviado la solicitud a un administrador y deberá ser aprobada para su ejecución.
                    </p>
                </div>
                <div className="buttons">
                    <AceptSoli />
                </div>
                <div className="homeB">
                    <HomeButtonCli />
                </div>
            </div>
        </div>
    )
}
