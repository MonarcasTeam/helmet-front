import React from 'react'
import { HomeButtonAdmin } from "../Reutilizables/Botones/HomeButtonAdmin.jsx"
import { Select, Upload } from 'antd';
import { Input } from 'antd';
import 'antd/dist/antd.css'
import "../estilos.css"
import CargarMenu from '../Reutilizables/CargarMenu.tsx';
import { SaveClient } from '../Reutilizables/Botones/SaveClient.jsx';
import { SaveClientDetail } from '../Reutilizables/Botones/SaveClientDetail.jsx';
// import { getClientes } from '../helpers/clientesEditar';

const { TextArea } = Input;

const handleClick = () => setLoading(true);

const { Option } = Select;

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

export const ClientAdmDetail = () => {
    // const [clientes, setClientes] = useState([]);

    // useEffect(() => {
    //   getClientes().then((c) => {
    //     setClientes(c);
    //   });
    // },[])

    // console.log(clientes)
    // function createData(nombreEmpresa, rutEmpresa, nombreContacto, email, diaPago, idUsuario , nombreContrato {
    //   return { nombreEmpresa, rutEmpresa, nombreContacto, email,diaPago, idUsuario, nombreContrato };
    // }
     
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <div className="TittleNewClient">
                    <h3>Editar cliente *nombre cliente*</h3>
                </div>
                <table className="nuevoClient">
                    {/* recoje la info del cliente y la muestra para editar o eliminar */}
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
                            <Option value="vproboste">Verónica Proboste</Option>
                            <Option value="gcarrasco">Guillermo Carrasco</Option>
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
                    <SaveClientDetail />
                </div>
                <div className="homeCli">
                    <HomeButtonAdmin />
                </div>
            </div>
        </div >
    )
}
