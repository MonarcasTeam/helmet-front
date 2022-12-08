import React from 'react'
import Button from 'react-bootstrap/Button';
import { TablaLlama } from '../Tablas/TablaLlama.jsx';

export const ModalLlama = ({ setStateLlama }) => {

    const closeLlama = () => {
        setStateLlama(false);
    }

    return (
        <div className="cuerpoModal animate__animated animate__fadeIn">
            <div className="contModal">
                <h2 className="titModal">Registro de Llamados</h2>
                <div className="tablaModal">
                    <TablaLlama />
                </div>
                <Button className="animate__animated" onClick={closeLlama} variant="success">Cerrar</Button>
            </div>
        </div>
    )
}
