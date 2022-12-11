import { useEffect, useState } from 'react';


//importaciones
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { getSolicitudes } from '../../helpers/solicitudes';



export const TablaSolicitudCli = () => {

  const [solicitudes, setSolicitudes] = useState();

  useEffect(() => {
    getSolicitudes().then((m) => {
      setSolicitudes(m);
    });
  }, []);
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
          {/* copiar className='primeraFila' a tablerow de cualquier tabla */}
          <TableRow className='primeraFila'> 
            <TableCell><b>#</b></TableCell>
            <TableCell><b>Tipo solicitud</b></TableCell>
            <TableCell><b>Fecha</b></TableCell>
            <TableCell><b>Estado</b></TableCell>
            <TableCell><b>Detalle</b></TableCell>

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
              <TableCell component="th" scope="row">
                <td className="detalleButton"><Button className="verDetalle" variant="success"><Link to="/admin/SoliClienteS">Ver detalle</Link></Button></td>
              </TableCell>



            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
