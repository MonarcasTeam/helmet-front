import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Result } from 'antd';
import Button from 'react-bootstrap/Button';

export const NotificacionPago = ({ setStateNotificacion }) => {

    const closeNotificacion = () => {
        setStateNotificacion(false);
    }

    return (
        <div className="cuerpoModal animate__animated animate__fadeIn">
            <div className="contModalCli">
                <Result
                    status="success"
                    title="Notificación enviada"
                />
                <div className='buttonsModal'>

                    <Button className="animate__animated" onClick={closeNotificacion} variant="success"><Link to="/admin/PagoDetail">Aceptar</Link></Button>

                </div>
            </div>
        </div >
    )
}
