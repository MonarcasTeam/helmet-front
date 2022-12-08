import React from 'react'
import { Result } from 'antd';
import 'antd/dist/antd.css'
import "../estilos.css"
import { AceptButtonB } from '../Reutilizables/Botones/AceptButtonB';

export const ClientAdmT = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
            <div className="TittleAcc">
                    <Result
                        status="success"
                        title="Cliente creado con éxito"
                        subTitle="Se ha asignado el nievo cliente al profesional Verónica Proboste, a quien se le ha notificado correctamente. El ID del nuevo cliente es #100004."
                        extra={[
                            <AceptButtonB />
                          ]}
                    />
                </div>
            </div>
        </div >
    )
}
