import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { Result } from 'antd';

export const NewReporte = ({ setStateNewReport }) => {

    const closeNewReport = () => {
        setStateNewReport(false);
    }

    return (
        <div className="cuerpoModal animate__animated animate__fadeIn">
            <div className="contModalAcc">
                <Result
                    status="success"
                    title="Reporte Nº xxxx enviado con éxito"
                    subTitle="Se ha enviado un correo al cliente informando sobre la emisión del reporte."
                />
                <Button className="animate__animated" onClick={closeNewReport} variant="success"><Link to="/prof/RepCli">Aceptar</Link></Button>
            </div>
        </div>
    )
}
