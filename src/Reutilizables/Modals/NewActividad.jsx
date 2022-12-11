import React from 'react'
import Button from 'react-bootstrap/Button';
import { Result } from 'antd';

export const NewActividad = ({ setStateNewActividad }) => {

    const closeNewActividad = () => {
        setStateNewActividad(false);
    }

    return (
        <div className="cuerpoModal animate__animated animate__fadeIn">
            <div className="contModalAcc">
                <Result
                    status="success"
                    title="Actividad creada con éxito"
                    subTitle="Se ha enviado un correo al cliente informando sobre la creación de la actividad."
                />
                <Button className="animate__animated" onClick={closeNewActividad} variant="success">Aceptar</Button>
            </div>
        </div>
    )
}
