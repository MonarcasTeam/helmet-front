import { useEffect, useState } from 'react';

//importaciones
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getVisitas } from '../../helpers/visitas';

export const TablaVisitas = () => {

  const [visitas, setVisitas] = useState();

  useEffect(() => {
    getVisitas().then((v) => {
      setVisitas(v);
    });
  },[]);

  function createData(idCliente, fechaVisita, fechaSolicitud,idEstVis ) {
    return { idCliente, fechaVisita, fechaSolicitud,idEstVis };
  }

  let rows = [];

  visitas?.map((v) => {
    rows.push(createData(v.idCliente, v.fechaVisita, v.fechaSolicitud,v.idEstVis))
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='primeraFila'>
            <TableCell><b>#</b></TableCell>
            <TableCell><b>Agendado por</b></TableCell>
            <TableCell><b>Fecha agenda</b></TableCell>
            <TableCell><b>Fecha visita</b></TableCell>
            <TableCell><b>Estado</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.idCliente}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <b>{index + 1}</b>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.idCliente}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.fechaVisita}
              </TableCell>
              <TableCell component="th" scope="row">
                ${row.fechaSolicitud}
              </TableCell>
              <TableCell component="th" scope="row">
                ${row.idEstVis}
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>





    // <Table striped bordered hover size="md" className="masterTabPa">
    //   <thead>
    //     <tr className="primeraFila">
    //       <th>Agendado por</th>
    //       <th>Fecha agenda</th>
    //       <th>Fecha visita</th>
    //       <th>Estado</th>
    //     </tr>
    //   </thead>
    //   <tbody className="tabPagos">
    //     <tr>
    //       <td>Carlos Diaz</td>
    //       <td>05/08/2022</td>
    //       <td>05/08/2022</td>
    //       <td>Realizado</td>
    //     </tr>
    //     <tr>
    //       <td>Carlos Diaz</td>
    //       <td>05/08/2022</td>
    //       <td>05/08/2022</td>
    //       <td>Pendiente</td>
    //     </tr>
    //     <tr>
    //       <td>Carlos Diaz</td>
    //       <td>05/08/2022</td>
    //       <td>05/08/2022</td>
    //       <td>Cancelado</td>
    //     </tr>
    //   </tbody>
    // </Table >
  )
}
