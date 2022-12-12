import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { Result } from 'antd';

export const SoliEnviada = ({ setStateSoliEnviada }) => {

    const closeSoliEnviada = () => {
        setStateSoliEnviada(false);
    }

    return (
        <div className="cuerpoModal animate__animated animate__fadeIn">
            <div className="contModalCli">
                <Result
                    status="success"
                    title="Solicitud enviada con éxito"
                    subTitle="Se ha enviado la solicitud a un administrador y deberá ser aprobada para su ejecución."
                />
                <Button className="animate__animated" onClick={closeSoliEnviada} variant="success"><Link to="/cli/SolicitudClienteF">Aceptar</Link></Button>
            </div>
        </div>
    )
}
