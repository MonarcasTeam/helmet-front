import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { Result } from 'antd';

export const SaveDetailUser = ({ setStateSaveDetailUser }) => {

    const closeSaveDetailUser = () => {
        setStateSaveDetailUser(false);
    }

    return (
        <div className="cuerpoModal animate__animated animate__fadeIn">
            <div className="contModalCli">
                <Result
                    status="success"
                    title="Usuario modificado con éxito"
                    subTitle="Se ha enviado un correo eléctrónico al mail correo@mail.cl con información sobre los cambios realizados."
                />
                <Button className="animate__animated" onClick={closeSaveDetailUser} variant="success"><Link to="/admin/listUsers">Aceptar</Link></Button>
            </div>
        </div>
    )
}
