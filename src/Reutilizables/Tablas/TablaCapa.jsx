import Table from 'react-bootstrap/Table';

export const TablaCapa = () => {
  return (
    <Table striped bordered hover size="md" className="masterTabPa">
      <thead>
        <tr className="primeraFila">
          <th>Solicitado por</th>
          <th>Fecha y hora</th>
          <th>Asistentes</th>
          <th>Asunto capacitación</th>
          <th>Lugar</th>
          <th>Materiales</th>
        </tr>
      </thead>
      <tbody className="tabPagos">
        <tr>
          <td>Carlos Diaz</td>
          <td>05/08/2022</td>
          <td>22 personas</td>
          <td>Uso de Extintores</td>
          <td>Casa matriz</td>
          <td>Extintores</td>
        </tr>
        <tr>
        <td>Carlos Diaz</td>
          <td>05/08/2022</td>
          <td>22 personas</td>
          <td>Uso de Extintores</td>
          <td>Casa matriz</td>
          <td>Extintores</td>
        </tr>
      </tbody>
    </Table>
  )
}
