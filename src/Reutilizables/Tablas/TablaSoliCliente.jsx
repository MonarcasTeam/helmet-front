import Table from 'react-bootstrap/Table';

export const TablaSoliCliente = () => {
  return (
    <Table striped bordered hover size="md" className="masterTabCli">
      <thead>
        <tr className="primeraFila">
          <th>Nº solicitud</th>
          <th>Tipo solicitud</th>
          <th>Fecha</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>#00001</td>
          <td>Asesoría especial</td>
          <td>03/11/2022</td>
          <td>Completado</td>
        </tr>
        <tr>
          <td>#00002</td>
          <td>Visita</td>
          <td>03/11/2022</td>
          <td>Aprobado</td>
        </tr>
        <tr>
          <td>#00003</td>
          <td>Capacitación</td>
          <td>03/11/2022</td>
          <td>En proceso</td>
        </tr>
        <tr>
          <td>#00004</td>
          <td>Actualizar reportes</td>
          <td>03/11/2022</td>
          <td>Pendiente</td>
        </tr>
      </tbody>
    </Table>
  )
}
