import React from 'react'
import { Input } from 'antd';
import { Select } from 'antd';
import 'antd/dist/antd.css'
import "../estilos.css"
import { HomeButtonCli } from '../Reutilizables/Botones/HomeButtonCli.jsx';
import { MenuActividad } from '../Reutilizables/Botones/MenuActividad';

const { TextArea } = Input;

const onChange = (date, dateString) => {
    console.log(date, dateString);
};

const { Option } = Select;

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

// fecha y hora actuales


export const ActividadNew = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <div className="TittleAcc">
                    <h3>Nueva actividad</h3>
                </div>
                <table className="nuevoRep">
                    <tr>
                        <td><b>Tipo de actividad :</b></td>
                        <td>
                            <Select
                                defaultValue="Seleccionar"
                                style={{
                                    width: 150,
                                    marginRight: 20,
                                }}
                                onChange={handleChange}
                            >
                                <Option value="Visita">Visita</Option>
                                <Option value="Capacitación">Capacitación</Option>
                                <Option value="Asesoría">Asesoría</Option>
                                <Option value="Implementación">Implementación</Option>
                                <Option value="Multa">Multa</Option>
                            </Select>
                        </td>
                        <td><b>Fecha y hora :</b></td>
                        <td>
                            {/* Insertar fecha y hora de sistema */}
                            10/10/2020 16:00 hrs
                        </td>
                    </tr>
                    <br />
                    {/* formulario según selección */}
                    <tr>
                        <td>asdasd</td>
                    </tr>
                </table>
            

                <div className="buttons">
                    <MenuActividad />
                </div>
                <div className="homeB">
                    <HomeButtonCli />
                </div>
            </div>
        </div >
    )
}
