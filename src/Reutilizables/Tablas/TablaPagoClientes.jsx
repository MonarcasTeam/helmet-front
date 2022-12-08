import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const TablaPagoClientes = () => {
  return (
    <Table striped bordered hover size="md" className="masterTab">
      <thead>
        <tr className="primeraFila">
          <th>Código</th>
          <th>Empresa</th>
          <th>Rut empresa</th>
          <th>Estado de pago</th>
        </tr>
      </thead>
      <tbody className="tabAccidentes">
        <tr>
          <td>100001</td>
          <td>Mercadolibre CL</td>
          <td>11.111.111-1</td>
          <td>Al día</td>
          <td className="detalleButton"><Button className="verDetalle" variant="success"><Link to="/admin/PagoDetail1">Ver detalle</Link></Button></td>
        </tr>
        <tr>
          <td>100002</td>
          <td>Duoc UC</td>
          <td>22.222.222-2</td>
          <td>Pendiente</td>
          <td className="detalleButton"><Button className="verDetalle" variant="success"><Link to="/admin/PagoDetail2">Ver detalle</Link></Button></td>
        </tr>
        <tr>
          <td>100003</td>
          <td>Blue Express</td>
          <td>33.333.333-3</td>
          <td>Atrasado</td>
          <td className="detalleButton"><Button className="verDetalle" variant="success">Ver detalle</Button></td>
        </tr>
      </tbody>
    </Table>
  )
}
