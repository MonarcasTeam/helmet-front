import Table from 'react-bootstrap/Table';

export const TablaMain = () => {
  return (
    <Table striped bordered hover size="md" className="masterTabCli">
      <thead>
        <tr className="primeraFila">
          <th>Reporte Nº</th>
          <th>Nombre</th>
          <th>Ubicación</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>100123</td>
          <td>Pedro Picapiedra</td>
          <td>Casino, AMB</td>
          <td>03/07/2022</td>
        </tr>
        <tr>
          <td>100254</td>
          <td>Pablo Marmol</td>
          <td>Patio central, CM</td>
          <td>16/07/2022</td>
        </tr>
        <tr>
          <td>100456</td>
          <td>Alfonso Alamos</td>
          <td>Bodega 5, CM</td>
          <td>22/08/2022</td>
        </tr>
      </tbody>
    </Table>
  )
}
