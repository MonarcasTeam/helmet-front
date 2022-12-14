import React from 'react';
import { Link } from "react-router-dom";
import { Result } from 'antd';
import Button from 'react-bootstrap/Button';

export const ClienteEliminado = ({ setStateEraseClient }) => {

    const closeEraseClient = () => {
        setStateEraseClient(false);
    }

    return (
        <div className="cuerpoModal animate__animated animate__fadeIn">
            <div className="contModalCli">
                <Result
                    status="success"
                    title="Cliente eliminado"
                />
                <div className='buttonsModal'>

                    <Button className="animate__animated" onClick={closeEraseClient} variant="success"><Link to="/admin/listClient">Aceptar</Link></Button>

                </div>
            </div>
        </div >
    )
}
