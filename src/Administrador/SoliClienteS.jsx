import React from 'react'
import 'antd/dist/antd.css'
import "../estilos.css"
import { HomeButtonCli } from '../Reutilizables/Botones/HomeButtonCli';
import { MenuSolicitudes } from '../Reutilizables/Botones/MenuSolicitudes';
import { HomeButtonAdmin } from '../Reutilizables/Botones/HomeButtonAdmin';

export const SoliClienteS = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <div className="TittleRep">
                    <h1>Solicitud # 00001</h1>
                </div>
                <table className="repDetail">
                    <tr>
                        <td><b>Tipo de solicitud :</b></td>
                        <td>Asesoría especial</td>
                        <td><b>Cliente :</b></td>
                        <td>Duoc UC</td>
                    </tr>
                    <tr>
                        <td><b>Estado :</b></td>
                        <td>Completa</td>
                        <td><b>Fecha :</b></td>
                        <td>28/08/2022</td>
                    </tr>
                </table>
                <div className="repDetailText">
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
                    <MenuSolicitudes />
                </div>
                <div className="homeB">
                    <HomeButtonAdmin />
                </div>
            </div>
        </div>
    )
}
