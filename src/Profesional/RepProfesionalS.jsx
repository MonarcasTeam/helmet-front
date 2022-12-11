import React from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css'
import "../estilos.css"
import { MenuAccP } from '../Reutilizables/Botones/MenuAccP';
import { HomeButtonProf } from '../Reutilizables/Botones/HomeButtonProf';
import { GuardarAccident } from '../Reutilizables/Botones/GuardarAccident';

export const RepProfesionalS = () => {

    const { Option } = Select;

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <div className="TittleAccP">
                    <h3>Reporte de accidente Nº 100456</h3>
                </div>
                <div className="guardar">
                    <GuardarAccident />
                </div>
                <table className="nuevoAcc2">
                    <tr>
                        <td><b>Nombre trabajador :</b></td>
                        <td>Pedro Picapiedra</td>
                        <td><b>Fecha :</b></td>
                        <td>28/08/2022</td>
                        <td><b>Reporte Nº :</b></td>
                        <td><b>100456</b></td>
                    </tr>
                    <br />
                    <tr>
                        <td><b>Rut trabajador :</b></td>
                        <td>12345678-9</td>
                        <td></td>
                        <td></td>
                        <td><b>Gravedad :</b></td>
                        <td>
                            <Select
                                defaultValue="Seleccionar"
                                style={{
                                    width: 120,
                                }}
                                onChange={handleChange}
                            >
                                <Option value="Leve">Leve</Option>
                                <Option value="Medio">Medio</Option>
                                <Option value="Grave">Grave</Option>
                                <Option value="Muy grave">Muy grave</Option>
                            </Select>
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td><b>Cargo :</b></td>
                        <td>Bodeguero</td>
                    </tr>
                    <br />
                    <tr>
                        <td><b>Ubicación :</b></td>
                        <td>Bodega</td>
                    </tr>
                    <br />
                    <tr>
                        <td><b>Observación :</b></td>
                    </tr>
                </table>
                <div className="observ2">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis iaculis nunc, vitae tincidunt augue vestibulum sodales.
                        Praesent rutrum urna et semper sagittis. In libero tortor, rhoncus et est ut, elementum pulvinar ligula.
                        Aliquam imperdiet, nibh vel imperdiet elementum, orci mi molestie sem, et ullamcorper tortor odio ut ligula.
                        Quisque sit amet erat rhoncus, laoreet diam vitae, suscipit massa. Nam quis tellus efficitur, commodo mi non, gravida ex.
                        Phasellus nisl neque, lobortis eget neque sed, consequat aliquet orci. Phasellus purus neque, sollicitudin a justo vel, ultrices cursus enim.
                        Quisque sollicitudin, magna a consequat tempor, sem leo elementum elit, quis tincidunt nibh ipsum nec sem. Morbi hendrerit eleifend varius.
                        Nulla consectetur nibh lorem, nec faucibus eros faucibus a. Nulla placerat, lectus non imperdiet viverra, ligula sem convallis elit, eget ultrices massa diam vel sem.
                        Aliquam justo sem, dapibus quis turpis sed, consequat viverra lacus. Donec ac rutrum nisl.
                    </p>
                </div>
                <div className="buttons">
                    <MenuAccP />
                </div>
                <div className="homeB">
                    <HomeButtonProf />
                </div>
            </div>
        </div>
    )
}