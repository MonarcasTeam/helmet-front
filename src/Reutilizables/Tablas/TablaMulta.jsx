import { useEffect, useState } from 'react';

//importaciones
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getMultas } from '../../helpers/multas';

export const TablaMulta = () => {
  const [multas, setMultas] = useState();

  useEffect(() => {
    getMultas().then((m) => {
      setMultas(m);
    });
  },[]);
  console.log(multas)
  function createData(fecha, motivo, valor,fechaPago,idEstPag) {
    return { fecha, motivo, valor,fechaPago,idEstPag };
  }
  let rows = [];

  multas?.map((m) => {
    rows.push(createData(m.fecha, m.motivo, m.valor,m.fechaPago,m.idEstPag))
  });

  return (
  <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow className='primeraFila'>
        <TableCell><b>#</b></TableCell>
        <TableCell><b>Fecha emisión</b></TableCell>
        <TableCell><b>Motivo</b></TableCell>
        <TableCell><b>Valor</b></TableCell>
        <TableCell><b>Fecha Pago</b></TableCell>
        <TableCell><b>Estado</b></TableCell>

      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row, index) => (
        <TableRow
          key={row.motivo}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            <b>{index + 1}</b>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.fecha}
          </TableCell>
          <TableCell component="th" scope="row">
            {row.motivo}
          </TableCell>
          <TableCell component="th" scope="row">
            ${row.valor}
          </TableCell>
          <TableCell component="th" scope="row">
            ${row.fechaPago}
          </TableCell>
          <TableCell component="th" scope="row">
            ${row.idEstPag}
          </TableCell>

        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>

    // <Table striped bordered hover size="md" className="masterTabPa">
    //   <thead>
    //     <tr className="primeraFila">
    //       <th>ID Asesoría</th>
    //       <th>Fecha emisión</th>
    //       <th>Motivo</th>
    //       <th>Valor</th>
    //       <th>Fecha de pago</th>
    //       <th>Estado</th>
    //     </tr>
    //   </thead>
    //   <tbody className="tabPagos">
    //     <tr>
    //       <td>200034</td>
    //       <td>05/08/2022</td>
    //       <td>Zonas de seguridad sin señalizar</td>
    //       <td>$ xxxxx</td>
    //       <td>30/08/2022</td>
    //       <td>Al día</td>
    //     </tr>
    //     <tr>
    //       <td>200034</td>
    //       <td>05/08/2022</td>
    //       <td>Zonas de seguridad sin señalizar</td>
    //       <td>$ xxxxx</td>
    //       <td>30/08/2022</td>
    //       <td>Pendiente</td>
    //     </tr>
    //   </tbody>
    // </Table>
  )
}
