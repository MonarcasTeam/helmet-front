import React from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export const NuevaSolicitud = () => {

    return (
        <div>
            <Button variant="danger"><Link to="/cli/NewSolicitud">Nueva solicitud</Link></Button>
        </div>
    )
}
