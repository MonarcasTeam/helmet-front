import React, { useContext, useMemo } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HelmetContext } from '../../Context/HelmetContext';
import { logout } from '../../store/auth';

export const ModalCerSesion = ({ setStateCerSesion }) => {

    const { userName, status } = useSelector(state => state.auth);
    const isAuthenticated = useMemo(() => status === 'authenticated', [status]);
    const dispatch = useDispatch();
    const { user, setUser } = useContext(HelmetContext);
    const navigate = useNavigate();


    const onClickLogoutSession = () => {
        dispatch(logout());
        setUser({
            username: '',
            role: '',
            active: false
        });

        navigate('/auth');

    }

    const closeCerSesion = () => {
        setStateCerSesion(false);
        console.log("Cancelando");
    }

    return (
        <div className="cuerpoModal animate__animated animate__fadeIn">
            <div className="contModalS">
                <h2 className="titModalS">¿Desea cerrar sesión?</h2>
                <Button onClick={onClickLogoutSession} className="animate__animated" variant="danger">Cerrar sesión</Button>
                <Button onClick={closeCerSesion} className="animate__animated" variant="outline-success">Cancelar</Button>
            </div>
        </div>
    )
}