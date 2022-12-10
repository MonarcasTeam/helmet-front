import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { Result } from 'antd';

export const GuardarAccidente = ({ setStateSaveAccident }) => {

    const closeSaveAccident = () => {
        setStateSaveAccident(false);
    }

    return (
        <div className="cuerpoModal animate__animated animate__fadeIn">
            <div className="contModalCli">
                <Result
                    status="success"
                    title="Cambios guardados"
                />
                <Button className="animate__animated" onClick={closeSaveAccident} variant="success"><Link to="/prof/accProfS">Aceptar</Link></Button>
            </div>
        </div>
    )
}
