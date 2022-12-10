import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { Result } from 'antd';

export const NuevoAccidente = ({ setStateNewAccident }) => {

    const closeNewAccident = () => {
        setStateNewAccident(false);
    }

    return (
        <div className="cuerpoModal animate__animated animate__fadeIn">
            <div className="contModalAcc">
                <Result
                    className='contResult'
                    status="success"
                    title="Reporte de accidente enviado con éxito"
                />
                <Button className="animate__animated" onClick={closeNewAccident} variant="success"><Link to="/cli/AccCli">Aceptar</Link></Button>
            </div>
        </div>
    )
}
