import React from 'react'
import { Input } from 'antd';
import { Select } from 'antd';
import 'antd/dist/antd.css'
import "../estilos.css"
import { HomeButtonCli } from '../Reutilizables/Botones/HomeButtonCli.jsx';
import { MenuReport } from '../Reutilizables/Botones/MenuReport';

const { TextArea } = Input;

const onChange = (date, dateString) => {
    console.log(date, dateString);
};

const { Option } = Select;

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

// fecha y hora actuales
var today = new Date();

// obtener la fecha y la hora
var now = today.toLocaleString();
console.log(now);

const MyComponents = {
    DatePicker: function DatePicker(props) {
        return now;
    }
}

function BlueDatePicker() {
    return <MyComponents.DatePicker color="blue" />;
}

export const ReporteNew = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <div className="TittleAcc">
                    <h3>Nuevo reporte</h3>
                </div>
                <table className="nuevoRep">
                    <tr>
                        <td><b>Cliente :</b></td>
                        <td>
                            <Select
                                defaultValue="Seleccionar"
                                style={{
                                    width: 120,
                                    marginRight: 20,
                                }}
                                onChange={handleChange}
                            >
                                <Option value="Cliente1">Cliente1</Option>
                                <Option value="Cliente2">Cliente2</Option>
                            </Select>
                        </td>
                        <td><b>Fecha y hora :</b></td>
                        <td>
                            {/* fecha y hora por sistema */}
                            <BlueDatePicker />
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td>Observación:</td>
                    </tr>
                </table>
                <div className="observ">
                    <TextArea rows={6} />
                </div>

                <div className="buttons">
                    <MenuReport />
                </div>
                <div className="homeB">
                    <HomeButtonCli />
                </div>
            </div>
        </div >
    )
}
