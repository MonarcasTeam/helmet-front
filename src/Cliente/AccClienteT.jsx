import React from 'react'
import 'antd/dist/antd.css'
import "../estilos.css"
import { Result } from 'antd';
import { BackButtonC } from '../Reutilizables/Botones/BackButtonC';
import { HomeButtonCli } from '../Reutilizables/Botones/HomeButtonCli';

export const AccClienteT = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <div className="TittleAcc">
                    <Result
                        status="success"
                        title="Reporte enviado con éxito"
                    />
                </div>
                <table className="nuevoAcc2">
                    <tr>
                        <td>Nombre trabajador :</td>
                        <td>Pedro Picapiedra</td>
                        <td>Fecha :</td>
                        <td>28/08/2022</td>
                        <td><b>Reporte Nº :</b></td>
                        <td><b>100456</b></td>
                    </tr>
                    <br />
                    <tr>
                        <td>Rut trabajador :</td>
                        <td>12345678-9</td>

                    </tr>
                    <br />
                    <tr>
                        <td>Cargo :</td>
                        <td>Bodeguero</td>
                    </tr>
                    <br />
                    <tr>
                        <td>Ubicación :</td>
                        <td>Bodega</td>
                    </tr>
                    <br />
                    <tr>
                        <td>Observación :</td>
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
                    <BackButtonC />
                </div>
                <div className="homeB">
                    <HomeButtonCli />
                </div>
            </div>
        </div>
    )
}
