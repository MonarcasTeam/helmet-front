import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const SendButton = () => {


  return (
    <div>
      <Button variant="success"><Link to="/cli/repEnviado">Enviar</Link></Button>
    </div>
  )
}
