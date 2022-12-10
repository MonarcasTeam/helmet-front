import React from 'react'
import { Result } from 'antd';
import 'antd/dist/antd.css'
import "../estilos.css"


export const UsersDetailSaved = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
            <div className="TittleAcc">
                    <Result
                        status="success"
                        title="Usuario modificado con éxito"
                        subTitle="Se ha enviado un correo eléctrónico al mail jgaetes@duoc.cl con información sobre los cambios realizados."
                    />
                </div>
                <div>
                    {/* <AceptButtonA /> */}
                </div>
            </div>
        </div >
    )
}
