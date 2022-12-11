import React from 'react'
import { HomeButtonAdmin } from "../Reutilizables/Botones/HomeButtonAdmin.jsx"
import { Select, Upload } from 'antd';
import { Input } from 'antd';
import 'antd/dist/antd.css'
import "../estilos.css"
import CargarMenu from '../Reutilizables/CargarMenu.tsx';
import { SaveClient } from '../Reutilizables/Botones/SaveClient.jsx';

const { Option } = Select;

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

export const ClientAdmS = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <div className="TittleNewClient">
                    <h3>Registro de cliente nuevo</h3>
                </div>
                <table className="nuevoClient">
                    <tr>
                        <td>Nombre empresa :</td>
                        <td><Input placeholder="Helmet Ltda." className="inputDefectoA" /></td>
                    </tr>
                    <br />
                    <tr>
                        <td>Rut empresa :</td>
                        <td><Input placeholder="11.111.111-1" className="inputDefectoA" /></td>
                    </tr>
                    <br />
                    <tr>
                        <td>Contacto empresa :</td>
                        <td><Input placeholder="Bruce Wayne" className="inputDefectoA" /></td>
                    </tr>
                    <br />
                    <tr>
                        <td>Correo electrónico :</td>
                        <td><Input placeholder="bwayne@helmet.cl" className="inputDefectoA" /></td>
                    </tr>
                    <br />
                    <tr>
                        <td>Fecha de pago :</td>
                        <td><Select
                            className="Fpago"
                            defaultValue="- Seleccionar -"
                            style={{
                                width: 150,
                            }}
                            onChange={handleChange}
                        >
                            <Option value="one">1</Option>
                            <Option value="five">5</Option>
                            <Option value="ten">10</Option>
                        </Select>
                            de cada mes.</td>
                    </tr>
                    <br />
                    <tr>
                        <td>Profesional asignado :</td>
                        <td><Select
                            className="Fpago"
                            defaultValue="- Seleccionar -"
                            style={{
                                width: 150,
                            }}
                            onChange={handleChange}
                        >
                            <Option value={1}>Prof 1</Option>
                            <Option value={2}>Prof 2</Option>
                        </Select>
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td>Cargar contrato</td>
                        <td>
                            <CargarMenu />
                        </td>
                    </tr>
                </table>
                <div className="buttonsCli">
                    <SaveClient />
                </div>
                <div className="homeCli">
                    <HomeButtonAdmin />
                </div>
            </div>
        </div >
    )
}