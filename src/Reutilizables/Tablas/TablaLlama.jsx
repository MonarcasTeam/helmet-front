import { useEffect, useState } from 'react';

//importaciones
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getRegistrollamadas } from '../../helpers/registrollamadas';

export const TablaLlama = () => {
  const [registrollamadas, setRegistrollamadas] = useState();

  useEffect(() => {
    getRegistrollamadas().then((ll) => {
      setRegistrollamadas(ll);
    });
  },[]);
  console.log(registrollamadas)
  function createData(idUsuario, fecha, hora, asunto) {
    return { idUsuario, fecha, hora, asunto};
  }

  let rows = [];

  registrollamadas?.map((ll) => {
    rows.push(createData(ll.idUsuario, ll.fecha, ll.hora, ll.asunto))
  });

  return (


    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow className='primeraFila'>
          <TableCell><b>#</b></TableCell>
          <TableCell><b>Solicitado Por</b></TableCell>
          <TableCell><b>Fecha</b></TableCell>
          <TableCell><b>Hora</b></TableCell>
          <TableCell><b>Asunto</b></TableCell>

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
              {row.hora}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.asunto}
            </TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>

    // <Table striped bordered hover size="md" className="masterTabPa">
    //   <thead>
    //     <tr className="primeraFila">
    //       <th>Usuario</th>
    //       <th>Fecha</th>
    //       <th>Hora</th>
    //       <th>Asunto</th>
    //     </tr>
    //   </thead>
    //   <tbody className="tabPagos">
    //     <tr>
    //       <td>Juan Carlos Bodoque</td>
    //       <td>05/08/2022</td>
    //       <td>10:36</td>
    //       <td>Asunto</td>
    //     </tr>
    //     <tr>
    //       <td>Tulio Triviño</td>
    //       <td>05/08/2022</td>
    //       <td>16:43</td>
    //       <td>Problema con botón</td>
    //     </tr>
    //     <tr>
    //       <td>Juanin Juan Harry</td>
    //       <td>05/08/2022</td>
    //       <td>19:10</td>
    //       <td>Usuario bloqueado</td>
    //     </tr>
    //   </tbody>
    // </Table>
  )
}
