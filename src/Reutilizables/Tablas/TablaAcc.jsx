import Table from 'react-bootstrap/Table';

export const TablaAcc = () => {
  return (
    <Table striped bordered hover size="md" className="masterTabPa">
      <thead>
        <tr className="primeraFila">
          <th>Nº Reporte</th>
          <th>Fecha</th>
          <th>Nivel</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody className="tabPagos">
        <tr>
          <td>100254</td>
          <td>05/08/2022</td>
          <td>4</td>
          <td>Pendiente</td>
        </tr>
      </tbody>
    </Table>
  )
}
