import { useEffect, useState } from 'react';

//importaciones
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getMejoras } from '../../helpers/mejoras';

export const TablaImp = () => {

  const [mejoras, setMejoras] = useState([]);

  useEffect(() => {
    getMejoras().then((m) => {
      setMejoras(m);
    });

  },[])

  function createData(nombre, aprobadoPor, fecha) {
    return { nombre, aprobadoPor, fecha }
  }

  let rows = [];

  mejoras?.map((m) => {
    rows.push(createData(m.nombre, m.aprobadoPor, m.fecha));
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='primeraFila'>
            <TableCell><b>#</b></TableCell>
            <TableCell><b>Nombre</b></TableCell>
            <TableCell><b>Aprobado Por</b></TableCell>
            <TableCell><b>Fecha</b></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((rows, index) => (
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
                {row.aprobadoPor}
              </TableCell>
              <TableCell component="th" scope="row">
                ${row.fecha}
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
