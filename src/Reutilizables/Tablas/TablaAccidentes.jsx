import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const TablaAccidentes = () => {
  return (
    <Table striped bordered hover size="md" className="masterTab">
      <thead>
        <tr className="primeraFila">
          <th>Reporte Nº</th>
          <th>Nombre empresa</th>
          <th>Fecha</th>
          <th>Nivel</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody className="tabAccidentes">
        <tr>
          <td>100123</td>
          <td>MercadoLibre CL</td>
          <td>03/07/2022</td>
          <td>Grave</td>
          <td>Finalizado</td>
          <td className="estadoButton"><Button className="verEstado" variant="success">Ver estado</Button></td>
        </tr>
        <tr>
          <td>100254</td>
          <td>Duoc UC</td>
          <td>16/07/2022</td>
          <td>Muy grave</td>
          <td>Pendiente</td>
          <td className="estadoButton"><Button className="verEstado" variant="success">Ver estado</Button></td>
        </tr>
        <tr>
          <td>100456</td>
          <td>Blue Express</td>
          <td>22/08/2022</td>
          <td>Medio</td>
          <td>Nuevo</td>
          <td className="estadoButton"><Button className="verEstado" variant="success"><Link to="/prof/accProfS">Ver estado</Link></Button></td>
        </tr>
      </tbody>
    </Table>
  )
}
