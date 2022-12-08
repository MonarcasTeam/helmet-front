import Table from 'react-bootstrap/Table';

export const TablaDetPagos = () => {
  return (
    <Table striped bordered hover size="md" className="masterTabPa">
      <thead>
        <tr className="primeraFila">
          <th>Servicio</th>
          <th>Cantidad</th>
          <th>Valor unitario</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody className="tabPagos">
        <tr>
          <td>Plan avanzado</td>
          <td>1</td>
          <td>$ xxxxx</td>
          <td>$ xxxxx</td>
        </tr>
        <tr>
          <td>Modificación chequeo</td>
          <td>1</td>
          <td>$ xxxxx</td>
          <td>$ xxxxx</td>
        </tr>
        <tr>
          <td>Capacitaciones extras</td>
          <td>2</td>
          <td>$ xxxxx</td>
          <td>$ xxxxx</td>
        </tr>
        <tr>
          <td>Actualizaciones de informes extras</td>
          <td>1</td>
          <td>$ xxxxx</td>
          <td>$ xxxxx</td>
        </tr>
        <tr>
          <td><p></p></td>
          <td><p></p></td>
          <td><p></p></td>
          <td><p></p></td>
        </tr>
        <tr>
          <td>Total neto</td>
          <td></td>
          <td></td>
          <td>$ xxxxx</td>
        </tr>
        <tr>
          <td>I.V.A.</td>
          <td></td>
          <td></td>
          <td>$ xxxxx</td>
        </tr>
        <tr>
          <td>Total</td>
          <td></td>
          <td></td>
          <td>$ xxxxx</td>
        </tr>
      </tbody>
    </Table>
  )
}
