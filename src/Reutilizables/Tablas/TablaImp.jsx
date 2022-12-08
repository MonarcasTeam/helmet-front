import Table from 'react-bootstrap/Table';

export const TablaImp = () => {
  return (
    <Table striped bordered hover size="md" className="masterTabPa">
      <thead>
        <tr className="primeraFila">
          <th>Nombre</th>
          <th>Fecha</th>
          <th>Aprovado por</th>
        </tr>
      </thead>
      <tbody className="tabPagos">
        <tr>
          <td>Señalización salidas de emergencias</td>
          <td>05/08/2022</td>
          <td>Carlos Diaz</td>
        </tr>
        <tr>
          <td>Señalización zona segura</td>
          <td>05/08/2022</td>
          <td>Carlos Diaz</td>
        </tr>
        <tr>
          <td>Renovación extintores</td>
          <td>05/08/2022</td>
          <td>Carlos Diaz</td>
        </tr>
        <tr>
          <td>Señalización extintores</td>
          <td>05/08/2022</td>
          <td>Carlos Diaz</td>
        </tr>
        <tr>
          <td>Instalación equipo desfibrilador</td>
          <td>05/08/2022</td>
          <td>Carlos Diaz</td>
        </tr>
        <tr>
          <td>Simulacro de emergencia</td>
          <td>05/08/2022</td>
          <td>Carlos Diaz</td>
        </tr>
      </tbody>
    </Table>
  )
}
