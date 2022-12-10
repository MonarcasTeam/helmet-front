import { useEffect, useState } from 'react';

//importaciones
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getDetallePago } from '../../helpers/detallePago';

export const TablaDetPagos = () => {
  const [detallePago, setDetallePago] = useState();

  useEffect(() => {
    getDetallePago().then((dp) => {
      setDetallePago(dp);
    });
  },[]);
  console.log(detallePago)
  function createData(nombre, cantidad, valor, total ) {
    return { nombre, cantidad, valor, total };
  }

  let rows = [];

  detallePago?.map((dp) => {
    rows.push(createData(dp.nombre, dp.cantidad, dp.valor,dp.total))
  });

  return (

    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow className='primeraFila'>
          <TableCell><b>#</b></TableCell>
          <TableCell><b>Servicio</b></TableCell>
          <TableCell><b>Cantidad</b></TableCell>
          <TableCell><b>Valor</b></TableCell>
          <TableCell><b>Total</b></TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow
            key={row.nombre}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              <b>{index + 1}</b>
            </TableCell>
            <TableCell component="th" scope="row">
              {row.nombre}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.cantidad}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.valor}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.total}
            </TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>

    // <Table striped bordered hover size="md" className="masterTabPa">
    //   <thead>
    //     <tr className="primeraFila">
    //       <th>Servicio</th>
    //       <th>Cantidad</th>
    //       <th>Valor unitario</th>
    //       <th>Total</th>
    //     </tr>
    //   </thead>
    //   <tbody className="tabPagos">
    //     <tr>
    //       <td>Plan avanzado</td>
    //       <td>1</td>
    //       <td>$ xxxxx</td>
    //       <td>$ xxxxx</td>
    //     </tr>
    //     <tr>
    //       <td>Modificación chequeo</td>
    //       <td>1</td>
    //       <td>$ xxxxx</td>
    //       <td>$ xxxxx</td>
    //     </tr>
    //     <tr>
    //       <td>Capacitaciones extras</td>
    //       <td>2</td>
    //       <td>$ xxxxx</td>
    //       <td>$ xxxxx</td>
    //     </tr>
    //     <tr>
    //       <td>Actualizaciones de informes extras</td>
    //       <td>1</td>
    //       <td>$ xxxxx</td>
    //       <td>$ xxxxx</td>
    //     </tr>
    //     <tr>
    //       <td><p></p></td>
    //       <td><p></p></td>
    //       <td><p></p></td>
    //       <td><p></p></td>
    //     </tr>
    //     <tr>
    //       <td>Total neto</td>
    //       <td></td>
    //       <td></td>
    //       <td>$ xxxxx</td>
    //     </tr>
    //     <tr>
    //       <td>I.V.A.</td>
    //       <td></td>
    //       <td></td>
    //       <td>$ xxxxx</td>
    //     </tr>
    //     <tr>
    //       <td>Total</td>
    //       <td></td>
    //       <td></td>
    //       <td>$ xxxxx</td>
    //     </tr>
    //   </tbody>
    // </Table>
  )
}
