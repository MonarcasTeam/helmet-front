import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const HomeButtonAdmin = () => {
  return (
    <div>
        <Button variant="dark"><Link to="/admin"><img src="/img/home.png" alt="home_helmet" className='home_helmet' /> Home</Link></Button>
    </div>
  )
}
