import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const ModalAprobar = ({ setStateAprobar }) => {

    const closeAprobar = () => {
        setStateAprobar(false);
    }

    return (
        <div className="cuerpoModal animate__animated animate__fadeIn">
            <div className="contModalSoli">
                <h2 className="titModal">Solicitud aprobada</h2>
                <Button className="animate__animated" onClick={closeAprobar} variant="success"><Link to="/admin/SoliClienteF">Aceptar</Link></Button>
            </div>
        </div>
    )
}
