import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const SendSoli = () => {


  return (
    <div>
      <Button variant="success"><Link to="/cli/SoliEnviada">Enviar</Link></Button>
    </div>
  )
}
