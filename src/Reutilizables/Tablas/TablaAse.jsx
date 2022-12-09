import { useEffect, useState } from 'react';

//importaciones
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getAsesoria } from '../../helpers/asesoria';

export const TablaAse = () => {
  const [asesoria, setAsesoria] = useState();

  useEffect(() => {
    getAsesoria().then((a) => {
      setAsesoria(a);
    });
  },[]);

  function createData(idUsuario, fecha, motivo) {
    return { idUsuario, fecha, motivo};
  }

  let rows = [];

  asesoria?.map((a) => {
    rows.push(createData(a.idUsuario, a.fecha, a.motivo))
  });

  return (
    
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow className='primeraFila'>
          <TableCell><b>#</b></TableCell>
          <TableCell><b>Solicitado Por</b></TableCell>
          <TableCell><b>Fecha</b></TableCell>
          <TableCell><b>Motivo</b></TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow
            key={row.idUsuario}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              <b>{index + 1}</b>
            </TableCell>
            <TableCell component="th" scope="row">
              {row.idUsuario}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.fecha}
            </TableCell>
            <TableCell component="th" scope="row">
              ${row.motivo}
            </TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>

    // <Table striped bordered hover size="md" className="masterTabPa">
    //   <thead>
    //     <tr className="primeraFila">
    //       <th>ID</th>
    //       <th>Solicitado por</th>
    //       <th>Fecha</th>
    //       <th>Motivo</th>
    //     </tr>
    //   </thead>
    //   <tbody className="tabPagos">
    //     <tr>
    //       <td>200034</td>
    //       <td>Carlos Diaz</td>
    //       <td>05/08/2022</td>
    //       <td>Fiscalización</td>
    //     </tr>
    //     <tr>
    //       <td>200056</td>
    //       <td>Carlos Diaz</td>
    //       <td>05/08/2022</td>
    //       <td>Accidente</td>
    //     </tr>
    //   </tbody>
    // </Table>
  )
}
