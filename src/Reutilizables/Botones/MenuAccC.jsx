import React from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export const MenuAccC = () => {

    return (
        <div>
            <Button variant="primary"><Link to="/cli/NewAcc">Nuevo accidente</Link></Button>
        </div>
    )
}
