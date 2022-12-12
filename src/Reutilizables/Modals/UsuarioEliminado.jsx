import React from 'react';
import { Link } from "react-router-dom";
import { Result } from 'antd';
import Button from 'react-bootstrap/Button';

export const UsuarioEliminado = ({ setStateEliminarUser }) => {

    const closeEliminarUser = () => {
        setStateEliminarUser(false);
    }

    return (
        <div className="cuerpoModal animate__animated animate__fadeIn">
            <div className="contModalCli">
                <Result
                    status="success"
                    title="Usuario eliminado"
                />
                <div className='buttonsModal'>

                    <Button className="animate__animated" onClick={closeEliminarUser} variant="success"><Link to="/admin/listUsers">Aceptar</Link></Button>

                </div>
            </div>
        </div >
    )
}
