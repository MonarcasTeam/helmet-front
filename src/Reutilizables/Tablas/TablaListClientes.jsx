import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const TablaListClientes = () => {
  return (
    <Table striped bordered hover size="md" className="masterTab">
      <thead>
        <tr className="primeraFila">
          <th>ID cliente</th>
          <th>Nombre cliente/empresa</th>
          <th>Rut empresa</th>
        </tr>
      </thead>
      <tbody className="tabAccidentes">
        <tr>
          <td>100001</td>
          <td>Mercadolibre CL</td>
          <td>11.111.111-1</td>
          <td className="detalleButton"><Button className="verDetalle" variant="success"><Link to="/prof/ActClientes">Ver actividades</Link></Button></td>
        </tr>
        <tr>
          <td>100002</td>
          <td>Duoc UC</td>
          <td>22.222.222-2</td>
          <td className="detalleButton"><Button className="verDetalle" variant="success"><Link to="">Ver actividades</Link></Button></td>
        </tr>
      </tbody>
    </Table>
  )
}
