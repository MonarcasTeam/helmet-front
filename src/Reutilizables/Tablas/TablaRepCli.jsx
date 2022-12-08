import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const TablaRepCli = () => {
  return (
    <Table striped bordered hover size="md" className="masterTab">
      <thead>
        <tr className="primeraFila">
          <th>Nº reporte</th>
          <th>Cliente</th>
          <th>Rut empresa</th>
          <th>Último reporte</th>
        </tr>
      </thead>
      <tbody className="tabAccidentes">
        <tr>
          <td>100001</td>
          <td>Mercadolibre CL</td>
          <td>11.111.111-1</td>
          <td>31/08/2022</td>
          <td className="detalleButton"><Button className="verDetalle" variant="success"><Link to="/prof/ReportCliente">Visualizar</Link></Button></td>
        </tr>
        <tr>
          <td>100002</td>
          <td>Duoc UC</td>
          <td>22.222.222-2</td>
          <td>31/08/2022</td>
          <td className="detalleButton"><Button className="verDetalle" variant="success">Visualizar</Button></td>
          {/* Menu pupup para ver resportes */}
        </tr>
      </tbody>
    </Table>
  )
}
