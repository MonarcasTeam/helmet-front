import { useMemo } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ user, children }) => {

    const { status } = useSelector(state => state.auth);
    const isAuthenticating = useMemo(() => status === 'authenticated', [status])
    const nav = useNavigate();

    useEffect(() => {
        if (!isAuthenticating) {
            nav('/auth');
        }
    }, [])



    return children;

}