import Table from 'react-bootstrap/Table';

export const TablaLlama = () => {
  return (
    <Table striped bordered hover size="md" className="masterTabPa">
      <thead>
        <tr className="primeraFila">
          <th>Usuario</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Asunto</th>
        </tr>
      </thead>
      <tbody className="tabPagos">
        <tr>
          <td>Juan Carlos Bodoque</td>
          <td>05/08/2022</td>
          <td>10:36</td>
          <td>Asunto</td>
        </tr>
        <tr>
          <td>Tulio Triviño</td>
          <td>05/08/2022</td>
          <td>16:43</td>
          <td>Problema con botón</td>
        </tr>
        <tr>
          <td>Juanin Juan Harry</td>
          <td>05/08/2022</td>
          <td>19:10</td>
          <td>Usuario bloqueado</td>
        </tr>
      </tbody>
    </Table>
  )
}
