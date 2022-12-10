import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { Result } from 'antd';

export const NuevoCliente = ({ setStateDetailClient }) => {

    const closeDetailClient = () => {
        setStateDetailClient(false);
    }

    return (
        <div className="cuerpoModal animate__animated animate__fadeIn">
            <div className="contModal">
                <Result
                    status="success"
                    title="Cliente creado con éxito"
                    subTitle="Se ha asignado el nuevo cliente al profesional Verónica Proboste, a quien se le ha notificado correctamente. El ID del nuevo cliente es #100004."
                />
                <Button className="animate__animated" onClick={closeDetailClient} variant="success"><Link to="/admin/listClient">Aceptar</Link></Button>
            </div>
        </div>
    )
}
