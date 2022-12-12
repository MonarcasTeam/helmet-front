import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";
import "../estilos.css"
import { loginApi } from '../helpers/auth';
import { useForm } from '../hooks/useForm';
import '../Reutilizables/estReu.css'
import jwt_decode from "jwt-decode";
import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import {startLogin} from '../store/auth/thunks';
import { HelmetContext } from '../Context/HelmetContext';

export const LogSesion = () => {

  const {user, setUser} = useContext(HelmetContext);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { formState, onInputChange } = useForm({
    username: '',
    password: ''
  });

  const onClickLogin = async (e) => {
    e.preventDefault();

    const user = {
      userName: formState.username,
      password: formState.password
    }

    dispatch(startLogin(user));
    const token = await loginApi(user);

    localStorage.setItem('token', token);

    const dectoken = jwt_decode(token);
    console.log(dectoken);

    const { sub, roles } = dectoken;

    setUser({
      username: sub,
      role: roles[0]?.authority,
      active: true
    });

    if (roles[0]?.authority == 'ROLE_ADMIN'){
      navigate('/admin');
    }
    if (roles[0]?.authority == 'ROLE_PROFESSIONAL'){
      navigate('/prof');
    }
    if (roles[0]?.authority == 'ROLE_CUSTOMER'){
      navigate('/cli');
    }

  }

  return (
    <div className="iniSesion">
      <div className="headLogin">
        <div>
          <img className="imgHelmet" src="img/logo.png" />
          <h1>Bienvenido a Helmet</h1>
        </div>
        <div className='formLogin'>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label><b>Usuario</b></Form.Label>
              <Form.Control
                onChange={onInputChange}
                name="username"
                type="text"
                placeholder="Ingrese usuario" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label><b>Contraseña</b></Form.Label>
              <Form.Control
                onChange={onInputChange}
                name="password"
                type="password"
                placeholder="Contraseña" />
              <br />
              <a href="#" className='olvido'>Olvidé mi contraseña</a>
            </Form.Group>
            <Button variant="success" type="submit" onClick={onClickLogin}>
              Iniciar Sesión
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}
