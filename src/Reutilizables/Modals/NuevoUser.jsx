import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

import { Result } from 'antd';

export const NuevoUser = ({ setStateNewUser }) => {

    const closeNewUser = () => {
        setStateNewUser(false);
    }

    return (
        <div className="cuerpoModal animate__animated animate__fadeIn">
            <div className="contModal">
                <Result
                className='contResult'
                        status="success"
                        title="Usuario creado con éxito"
                        subTitle="Se ha enviado un correo eléctrónico al mail bwayne@waine.com con sus credenciales de acceso e intrucciones de primer uso para nuevos usuarios."
                    />
                <Button className="animate__animated" onClick={closeNewUser} variant="success"><Link to="/admin/listUsers">Aceptar</Link></Button>
            </div>
        </div>
    )
}
