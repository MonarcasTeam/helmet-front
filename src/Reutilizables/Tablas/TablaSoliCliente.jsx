import { useEffect, useState } from 'react';

//importaciones
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getSolicitudes } from '../../helpers/solicitudes';

export const TablaSoliCliente = () => {
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    
    getSolicitudes().then((m) => {
      setSolicitudes(m);
    })
  },[])
  console.log(solicitudes)
  function createData(solicitud, fecha, idEstaddo) {
    return { solicitud, fecha, idEstaddo };
  }

  let rows = [];

  solicitudes?.map((m) => {
    rows.push(createData(m.solicitud, m.fecha, m.idEstaddo))
  });

  return (

    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow className='primeraFila'>
          <TableCell><b>#</b></TableCell>
          <TableCell><b>Tipo de solicitudes</b></TableCell>
          <TableCell><b>Fecha</b></TableCell>
          <TableCell><b>Estado</b></TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow
            key={row.solicitud}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              <b>{index + 1}</b>
            </TableCell>
            <TableCell component="th" scope="row">
              {row.solicitud}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.fecha}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.idEstaddo}
            </TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>

    // <Table striped bordered hover size="md" className="masterTabCli">
    //   <thead>
    //     <tr className="primeraFila">
    //       <th>Nº solicitudqqq</th>
    //       <th>Tipo solicitud</th>
    //       <th>Fecha</th>
    //       <th>Estado</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <td>#00001</td>
    //       <td>Asesoría especial</td>
    //       <td>03/11/2022</td>
    //       <td>Completado</td>
    //     </tr>
    //     <tr>
    //       <td>#00002</td>
    //       <td>Visita</td>
    //       <td>03/11/2022</td>
    //       <td>Aprobado</td>
    //     </tr>
    //     <tr>
    //       <td>#00003</td>
    //       <td>Capacitación</td>
    //       <td>03/11/2022</td>
    //       <td>En proceso</td>
    //     </tr>
    //     <tr>
    //       <td>#00004</td>
    //       <td>Actualizar reportes</td>
    //       <td>03/11/2022</td>
    //       <td>Pendiente</td>
    //     </tr>
    //   </tbody>
    // </Table>
  )
}
