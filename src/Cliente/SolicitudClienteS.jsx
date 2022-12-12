import React from 'react'
import { DatePicker, } from 'antd';
import { Input } from 'antd';
import { Select } from 'antd';
import 'antd/dist/antd.css'
import "../estilos.css"
import { HomeButtonCli } from '../Reutilizables/Botones/HomeButtonCli.jsx';
import { SendSoli } from '../Reutilizables/Botones/SendSoli.jsx';
import { CancelSoli } from '../Reutilizables/Botones/CancelSoli.jsx';

const { TextArea } = Input;

const { Option } = Select;

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const onChange = (date, dateString) => {
    console.log(date, dateString);
};

export const SolicitudClienteS = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <div className="TittleAcc">
                    <h1>Nueva solicitud</h1>
                </div>
                <table className="nuevaSoli">
                    <tr>
                        <td><b>Tipo de solicitud :</b></td>
                        <td><Select
                            className="nivel"
                            defaultValue="- Seleccionar -"
                            style={{
                                width: 150,
                                marginRight: 30
                            }}
                            onChange={handleChange}
                        >
                            <Option value="ActReporte">Actualizar reportes</Option>
                            <Option value="Asesoria">Asesoría especial</Option>
                            <Option value="capacitacion">Capacitación</Option>
                            <Option value="Visita">Visita</Option>
                        </Select></td>
                        <td><b>Fecha :</b></td>
                        <td><DatePicker
                            onChange={onChange}
                            style={{
                                marginLeft: 20
                            }} /></td>
                    </tr>
                    <br />
                    <tr>
                        <td><b>Observación :</b></td>
                    </tr>
                </table>
                <div className="observSoli">
                    <TextArea rows={6} />
                </div>

                <div className="buttons">
                    <SendSoli /> 
                    <CancelSoli />
                </div>
                <div className="homeB">
                    <HomeButtonCli />
                </div>
            </div>
        </div >
    )
}
