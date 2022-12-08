import Table from 'react-bootstrap/Table';

export const TablaMulta = () => {
  return (
    <Table striped bordered hover size="md" className="masterTabPa">
      <thead>
        <tr className="primeraFila">
          <th>ID Asesoría</th>
          <th>Fecha emisión</th>
          <th>Motivo</th>
          <th>Valor</th>
          <th>Fecha de pago</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody className="tabPagos">
        <tr>
          <td>200034</td>
          <td>05/08/2022</td>
          <td>Zonas de seguridad sin señalizar</td>
          <td>$ xxxxx</td>
          <td>30/08/2022</td>
          <td>Al día</td>
        </tr>
        <tr>
          <td>200034</td>
          <td>05/08/2022</td>
          <td>Zonas de seguridad sin señalizar</td>
          <td>$ xxxxx</td>
          <td>30/08/2022</td>
          <td>Pendiente</td>
        </tr>
      </tbody>
    </Table>
  )
}
