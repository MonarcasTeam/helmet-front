import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const TablaRendProfesionales = () => {
  return (
    <Table striped bordered hover size="md" className="masterTab">
      <thead>
        <tr className="primeraFila">
          <th>Nombre profesional</th>
          <th>Usuario</th>
          <th>Rut</th>
          <th>Clientes</th>
          <th>Detalle</th>
        </tr>
      </thead>
      <tbody className="tabAccidentes">
        <tr>
          <td>Verónica Proboste</td>
          <td>vproboste</td>
          <td>11.111.111-1</td>
          <td>1 cliente</td>
          <td className="detalleButton"><Button className="verDetalle" variant="success"><Link to="/admin/RendimientoDet1">Ver reportes</Link></Button></td>
        </tr>
        <tr>
          <td>Guillermo Carrasco</td>
          <td>gcarrasco</td>
          <td>22.222.222-2</td>
          <td>2 clientes</td>
          <td className="detalleButton"><Button className="verDetalle" variant="success"><Link to="/admin/RendimientoDet2">Ver reportes</Link></Button></td>
        </tr>
      </tbody>
    </Table>
  )
}
