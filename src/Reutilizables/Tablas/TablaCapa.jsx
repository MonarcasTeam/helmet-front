import { useEffect, useState } from 'react';

//importaciones
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getCapacitaciones } from '../../helpers/capacitaciones';

export const TablaCapa = () => {
  const [capacitaciones, setCapacitaciones] = useState();

  useEffect(() => {
    getCapacitaciones().then((c) => {
      setCapacitaciones(c);
    });
  },[]);
  console.log(capacitaciones)
  function createData(idUsuario, fecha, nAsistentes, titulo, lugares, materialAdd) {
    return { idUsuario, fecha, nAsistentes, titulo, lugares, materialAdd };
  }

  let rows = [];

  capacitaciones?.map((c) => {
    rows.push(createData(c.idUsuario, c.capacitacionesfecha, c.nAsistentes, c.titulo, c.lugares, c.materialAdd))
  });

  return (

    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow className='primeraFila'>
          <TableCell><b>#</b></TableCell>
          <TableCell><b>Solicitado Por</b></TableCell>
          <TableCell><b>Fecha y Hora</b></TableCell>
          <TableCell><b>Asistentes</b></TableCell>
          <TableCell><b>Tema capacitación</b></TableCell>
          <TableCell><b>Lugar</b></TableCell>
          <TableCell><b>Materiales</b></TableCell>

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
              ${row.nAsistentes}
            </TableCell>
            <TableCell component="th" scope="row">
              ${row.titulo}
            </TableCell>
            <TableCell component="th" scope="row">
              ${row.lugares}
            </TableCell>
            <TableCell component="th" scope="row">
              ${row.materialAdd}
            </TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    // <Table striped bordered hover size="md" className="masterTabPa">
    //   <thead>
    //     <tr className="primeraFila">
    //       <th>Solicitado por</th>
    //       <th>Fecha y hora</th>
    //       <th>Asistentes</th>
    //       <th>Asunto capacitación</th>
    //       <th>Lugar</th>
    //       <th>Materiales</th>
    //     </tr>
    //   </thead>
    //   <tbody className="tabPagos">
    //     <tr>
    //       <td>Carlos Diaz</td>
    //       <td>05/08/2022</td>
    //       <td>22 personas</td>
    //       <td>Uso de Extintores</td>
    //       <td>Casa matriz</td>
    //       <td>Extintores</td>
    //     </tr>
    //     <tr>
    //     <td>Carlos Diaz</td>
    //       <td>05/08/2022</td>
    //       <td>22 personas</td>
    //       <td>Uso de Extintores</td>
    //       <td>Casa matriz</td>
    //       <td>Extintores</td>
    //     </tr>
    //   </tbody>
    // </Table>
  )
}
