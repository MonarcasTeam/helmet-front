import React, { useState } from 'react';
import { Result } from 'antd';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { UsuarioEliminado } from './UsuarioEliminado';

export const EliminarUser = ({ setStateEliminarUser }) => {

    const closeEliminarUser = () => {
        setStateEliminarUser(false);
    }

    const [stateDetailUser, setStateDetailUser] = useState(false);

    const showDetailUser = () => {
        // setTimeout( () => {
        setStateDetailUser(true);
        // }, 5000 );  
    }

    return (
        <div className="cuerpoModal animate__animated animate__fadeIn">
            <div className="contModalCli">
                <Result
                    status="warning"
                    title="¿Desea eliminar al usuario?"
                />
                <div className='buttonsModal'>
                    {
                        (stateDetailUser) ? "" :

                            <ToggleButtonGroup type="checkbox" className="mb-2">
                                <ToggleButton onClick={showDetailUser} id="tbg-check-1" variant="danger" value={1}>
                                    Eliminar usuario
                                </ToggleButton>
                                <ToggleButton onClick={closeEliminarUser} id="tbg-check-2" variant="success" value={2}>
                                    Cancelar
                                </ToggleButton>
                            </ToggleButtonGroup>
                    }

                    {
                        (stateDetailUser) ? <UsuarioEliminado setStateDetailUser={setStateDetailUser} /> : ""
                    }
                </div>
            </div>
        </div>
    )
}
