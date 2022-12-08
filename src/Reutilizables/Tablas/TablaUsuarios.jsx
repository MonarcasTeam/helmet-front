import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const TablaUsuarios = () => {
  return (
    <Table striped bordered hover size="md" className="masterTab">
      <thead>
        <tr className="primeraFila">
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Tipo de usuario</th>
          <th>Empresa</th>
        </tr>
      </thead>
      <tbody className="tabAccidentes">
        <tr>
          <td>Johann Gómez Norambuena</td>
          <td>JGOMEZN</td>
          <td>Administrador</td>
          <td>Helmet</td>
          <td className="detalleButton"><Button className="verDetalle" variant="success">Ver detalle</Button></td>
        </tr>
        <tr>
          <td>Guillermo carrasco Araya</td>
          <td>GCARRASCOA</td>
          <td>Profesional</td>
          <td>Helmet</td>
          <td className="detalleButton"><Button className="verDetalle" variant="success">Ver detalle</Button></td>
        </tr>
        <tr>
          <td>Juan Gaete Stangl</td>
          <td>JGAETES</td>
          <td>Cliente</td>
          <td>Duoc UC</td>
          <td className="detalleButton"><Button className="verDetalle" variant="success"><Link to="/admin/detailUsers">Ver detalle</Link></Button></td>
        </tr>
      </tbody>
    </Table>
  )
}
