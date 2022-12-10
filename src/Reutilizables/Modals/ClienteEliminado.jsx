import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Result } from 'antd';
import Button from 'react-bootstrap/Button';

export const ClienteEliminado = ({ setStateEraseClient }) => {

    const closeEraseClient = () => {
        setStateEraseClient(false);
    }

    const [stateErasedClient, setStateErasedClient] = useState(false);

    const showErasedClient = () => {
        // setTimeout( () => {
        setStateErasedClient(true);
        // }, 5000 );  
    }

    return (
        <div className="cuerpoModal animate__animated animate__fadeIn">
            <div className="contModalCli">
                <Result
                    status="success"
                    title="Cliente eliminado"
                />
                <div className='buttonsModal'>
                    {
                        (stateErasedClient) ? "" :

                            <Button className="animate__animated" onClick={showErasedClient} variant="success"><Link to="/admin/listClient">Aceptar</Link></Button>
                    }

                    {
                        (stateErasedClient) ? <DetalleCliente setStateErasedClient={setStateErasedClient} /> : ""
                    }
                </div>
            </div>
        </div >
    )
}
