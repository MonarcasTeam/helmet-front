import React from 'react'
import { Result } from 'antd';
import 'antd/dist/antd.css'
import "../estilos.css"
import { AceptButtonA } from '../Reutilizables/Botones/AceptButtonA';

export const UsersAdmT = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
            <div className="TittleAcc">
                    <Result
                        status="success"
                        title="Usuario creado con éxito"
                        subTitle="Se ha enviado un correo eléctrónico al mail bwayne@waine.com con sus credenciales de acceso e intrucciones de primer uso para nuevos usuarios."
                    />
                </div>
                <div>
                    <AceptButtonA />
                </div>
            </div>
        </div >
    )
}
