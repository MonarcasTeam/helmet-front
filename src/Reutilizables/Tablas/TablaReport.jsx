import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const TablaReport = () => {
  return (
    <Table striped bordered hover size="md" className="masterTab">
      <thead>
        <tr className="primeraFila">
          <th>Nº reporte</th>
          <th>Fecha emisión</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="tabAccidentes">
        <tr>
          <td>100001</td>
          <td>04/10/2022</td>
          <td className="detalleButton"><Button className="verDetalle" variant="success"><Link to="/cli/ReportClientesS">Visualizar</Link></Button></td>
        </tr>
        <tr>
          <td>100002</td>
          <td>04/10/2022</td>
          <td className="detalleButton"><Button className="verDetalle" variant="success">Visualizar</Button></td>
        </tr>
        <tr>
          <td>100003</td>
          <td>04/10/2022</td>
          <td className="detalleButton"><Button className="verDetalle" variant="success">Visualizar</Button></td>
        </tr>
      </tbody>
    </Table>
  )
}
