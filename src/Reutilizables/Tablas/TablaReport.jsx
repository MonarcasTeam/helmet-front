// import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

//importaciones
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getRegistroreporte } from '../../helpers/registroreporte';

export const TablaReport = () => {
  const [registroreporte, setRegistroreporte] = useState([]);

  useEffect(() => {
    
    getRegistroreporte().then((rr) => {
      setRegistroreporte(rr);
    })
  },[])
  console.log(registroreporte)
  function createData(nombreRep, idUsuario, fecha) {
    return { nombreRep, idUsuario, fecha };
  }

  let rows = [];

  registroreporte?.map((rr) => {
    rows.push(createData(rr.nombreRep, rr.idUsuario, rr.fecha))
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
          <TableCell><b>Detalle</b></TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow
            key={row.nombreRep}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              <b>{index + 1}</b>
            </TableCell>
            <TableCell component="th" scope="row">
              {row.nombreRep}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.idUsuario}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.fecha}
            </TableCell>
            <TableCell component="th" scope="row">
            <td className="detalleButton"><Button className="verDetalle" variant="success"><Link to="/cli/ReportClientesS">Visualizar</Link></Button></td>
            </TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    // <Table striped bordered hover size="md" className="masterTab">
    //   <thead>
    //     <tr className="primeraFila">
    //       <th>Nº reporte</th>
    //       <th>Fecha emisión</th>
    //       <th></th>
    //     </tr>
    //   </thead>
    //   <tbody className="tabAccidentes">
    //     <tr>
    //       <td>100001</td>
    //       <td>04/10/2022</td>
    //       <td className="detalleButton"><Button className="verDetalle" variant="success"><Link to="/cli/ReportClientesS">Visualizar</Link></Button></td>
    //     </tr>
    //     <tr>
    //       <td>100002</td>
    //       <td>04/10/2022</td>
    //       <td className="detalleButton"><Button className="verDetalle" variant="success">Visualizar</Button></td>
    //     </tr>
    //     <tr>
    //       <td>100003</td>
    //       <td>04/10/2022</td>
    //       <td className="detalleButton"><Button className="verDetalle" variant="success">Visualizar</Button></td>
    //     </tr>
    //   </tbody>
    // </Table>
  )
}
