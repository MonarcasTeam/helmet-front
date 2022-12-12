import React from 'react'
import { HomeButtonAdmin } from "../Reutilizables/Botones/HomeButtonAdmin.jsx"
import { Select } from 'antd';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import 'antd/dist/antd.css'
import "../estilos.css"
import { MenuUserB } from '../Reutilizables/Botones/MenuUserB.jsx';

const { Option } = Select;

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

export const UsersDetailAdm3 = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <div className="TittleNewUser">
                    <h3>Detalles de usuario</h3>
                </div>
                <table className="nuevoUser">
                    <tr>
                        <td>Nombre :</td>
                        <td><Input placeholder="Bruce Wayne" defaultValue="Johann Bernardo Gómez Norambuena" className="inputDefectoA" /></td>
                        <td>Tipo de usuario :</td>
                        <td><Select
                            className="Cliente"
                            defaultValue={1}
                            style={{
                                width: 150,
                                marginLeft: 20,
                            }}
                            onChange={handleChange}
                        >
                            <Option value={1}>Administrador</Option>
                            <Option value={2}>Cliente</Option>
                            <Option value={3}>Profesional</Option>
                        </Select></td>
                    </tr>
                    <br />
                    <tr>
                        <td>Rut :</td>
                        <td><Input placeholder="12345678-9" defaultValue="12.345.678-9" className="inputDefecto" /></td>
                    </tr>
                    <br />
                    <tr>
                        <td>Nombre usuario :</td>
                        <td><Input placeholder="BWAYNE" defaultValue="JGOMEZN" className="inputDefecto" /></td>
                    </tr>
                    <br />
                    <tr>
                        <td>Email :</td>
                        <td><Input placeholder="bwayne@wayneind.com" defaultValue="jgomezn@helmet.cl" className="inputDefecto"/></td>
                    </tr>
                    <br />
                    <tr>
                        <td>Contraseña :</td>
                        <td><Input.Password
                            style={{
                                width: '350px',
                                marginLeft: '20px' 
                            }}
                            placeholder="Genérica tipo B12345678W"
                            defaultValue="J123456789G"
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                        </td>
                    </tr>
                </table>

                <div className="buttonsA">
                    <MenuUserB/>
                </div>
                <div className="homeA">
                    <HomeButtonAdmin />
                </div>
            </div>
        </div >
    )
}
