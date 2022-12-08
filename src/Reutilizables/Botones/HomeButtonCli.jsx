import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const HomeButtonCli = () => {
  return (
    <div>
        <Button variant="success"><Link to="/cli">Home</Link></Button>
    </div>
  )
}
