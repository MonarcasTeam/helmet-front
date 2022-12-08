import React from 'react'
import { SendButton } from '../Reutilizables/Botones/SendButton.jsx';
import { CancelButtonC } from '../Reutilizables/Botones/CancelButtonC.jsx';
import { DatePicker, } from 'antd';
import { Input } from 'antd';
import 'antd/dist/antd.css'
import "../estilos.css"
import { HomeButtonCli } from '../Reutilizables/Botones/HomeButtonCli.jsx';

const { TextArea } = Input;

const onChange = (date, dateString) => {
    console.log(date, dateString);
};

export const AccClienteS = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <div className="TittleAcc">
                    <h3>Reportar nuevo accidente</h3>
                </div>
                <table className="nuevoAcc">
                    <tr>
                        <td>Nombre trabajador:</td>
                        <td><Input placeholder="Pedro Picapiedra" /></td>
                        <td>Fecha:</td>
                    </tr>
                    <br />
                    <tr>
                        <td>Rut trabajador:</td>
                        <td><Input placeholder="12345678-9" /></td>
                    </tr>
                    <br />
                    <tr>
                        <td>Cargo:</td>
                        <td><Input placeholder="Bodeguero" /></td>
                    </tr>
                    <br />
                    <tr>
                        <td>Ubicación:</td>
                        <td><Input placeholder="Bodega" /></td>
                    </tr>
                    <br />
                    <tr>
                        <td>Observación:</td>
                    </tr>
                </table>
                <div className="fecha">
                    <DatePicker onChange={onChange} />
                </div>
                <div className="observ">
                    <TextArea rows={4} />
                </div>

                <div className="buttons">
                    <SendButton />
                    <CancelButtonC />
                </div>
                <div className="homeB">
                    <HomeButtonCli />
                </div>
            </div>
        </div >
    )
}
