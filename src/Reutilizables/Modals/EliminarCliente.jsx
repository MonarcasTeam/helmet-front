import React, { useState } from 'react';
import { Result } from 'antd';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { ClienteEliminado } from './ClienteEliminado';

export const EliminarCliente = ({ setStateEraseClient }) => {

    const closeEraseClient = () => {
        setStateEraseClient(false);
    }

    const [stateDetailClient, setStateDetailClient] = useState(false);

    const showDetailClient = () => {
        // setTimeout( () => {
        setStateDetailClient(true);
        // }, 5000 );  
    }

    return (
        <div className="cuerpoModal animate__animated animate__fadeIn">
            <div className="contModalCli">
                <Result
                    status="warning"
                    title="¿Desea eliminar al cliente?"
                />
                <div className='buttonsModal'>
                    {
                        (stateDetailClient) ? "" :

                            <ToggleButtonGroup type="checkbox" className="mb-2">
                                <ToggleButton onClick={showDetailClient} id="tbg-check-1" variant="danger" value={1}>
                                    Eliminar cliente
                                </ToggleButton>
                                <ToggleButton onClick={closeEraseClient} id="tbg-check-2" variant="success" value={2}>
                                    Cancelar
                                </ToggleButton>
                            </ToggleButtonGroup>
                    }

                    {
                        (stateDetailClient) ? <ClienteEliminado setStateDetailClient={setStateDetailClient} /> : ""
                    }
                </div>
            </div>
        </div>
    )
}
