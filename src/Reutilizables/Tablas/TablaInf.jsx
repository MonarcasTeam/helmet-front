import Table from 'react-bootstrap/Table';

export const TablaInf = () => {
  return (
    <Table striped bordered hover size="md" className="masterTabPa">
      <thead>
        <tr className="primeraFila">
          <th>Nº Informe</th>
          <th>Fecha</th>
          <th>Informes</th>
        </tr>
      </thead>
      <tbody className="tabPagos">
        <tr>
          <td>10001</td>
          <td>05/08/2022</td>
          <td><a href="#">Ver informe</a></td>
        </tr>
        <tr>
          <td>10002</td>
          <td>05/08/2022</td>
          <td><a href="#">Ver informe</a></td>
        </tr>
      </tbody>
    </Table>
  )
}
