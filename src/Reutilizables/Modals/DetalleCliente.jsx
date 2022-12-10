import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

import { Result } from 'antd';

export const DetalleCliente = ({ setStateDetailClient }) => {

    const closeDetailClient = () => {
        setStateDetailClient(false);
    }

    return (
        <div className="cuerpoModal animate__animated animate__fadeIn">
            <div className="contModal">
                <Result
                    status="success"
                    title="Usuario modificado con éxito"
                    subTitle="Se ha enviado un correo eléctrónico al mail jgaetes@duoc.cl con información sobre los cambios realizados."
                />
                <Button className="animate__animated" onClick={closeDetailClient} variant="success"><Link to="/admin/listClient">Aceptar</Link></Button>
            </div>
        </div>
    )
}
