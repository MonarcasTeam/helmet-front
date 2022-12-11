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
import { getAccidente } from '../../helpers/accidente';


export const TablaAccidentes = () => {
  const [accidente, setAccidente] = useState();

  useEffect(() => {
    getAccidente().then((a) => {
      setAccidente(a);
    });
  },[]);
  console.log(accidente)
  function createData(idCliente, fecha, idGravedad,idEstadoA) {
    return { idCliente, fecha, idGravedad,idEstadoA };
  }

  let rows = [];

  accidente?.map((a) => {
    rows.push(createData(a.idCliente, a.fecha, a.idGravedad,a.idEstadoA))
  });

  return (


    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='primeraFila'>
            <TableCell><b>#</b></TableCell>
            <TableCell><b>Nombre Empresa</b></TableCell>
            <TableCell><b>Fecha</b></TableCell>
            <TableCell><b>Gravedad</b></TableCell>
            <TableCell><b>Estado</b></TableCell>
            <TableCell><b>Detalle</b></TableCell>

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
                {row.fecha}
              </TableCell>
              <TableCell component="th" scope="row">
               {row.idGravedad}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.idEstadoA}
              </TableCell>
              <TableCell component="th" scope="row">
              <td className="estadoButton"><Button className="verEstado" variant="success"><Link to="/prof/accProfS">Ver estado</Link></Button></td>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    // <Table striped bordered hover size="md" className="masterTab">
    //   <thead>
    //     <tr className="primeraFila">
    //       <th>Reporte Nº</th>
    //       <th>Nombre empresa</th>
    //       <th>Fecha</th>
    //       <th>Nivel</th>
    //       <th>Estado</th>
    //     </tr>
    //   </thead>
    //   <tbody className="tabAccidentes">
    //     <tr>
    //       <td>100123</td>
    //       <td>MercadoLibre CL</td>
    //       <td>03/07/2022</td>
    //       <td>Grave</td>
    //       <td>Finalizado</td>
    //       <td className="estadoButton"><Button className="verEstado" variant="success">Ver estado</Button></td>
    //     </tr>
    //     <tr>
    //       <td>100254</td>
    //       <td>Duoc UC</td>
    //       <td>16/07/2022</td>
    //       <td>Muy grave</td>
    //       <td>Pendiente</td>
    //       <td className="estadoButton"><Button className="verEstado" variant="success">Ver estado</Button></td>
    //     </tr>
    //     <tr>
    //       <td>100456</td>
    //       <td>Blue Express</td>
    //       <td>22/08/2022</td>
    //       <td>Medio</td>
    //       <td>Nuevo</td>
    //       <td className="estadoButton"><Button className="verEstado" variant="success"><Link to="/prof/accProfS">Ver estado</Link></Button></td>
    //     </tr>
    //   </tbody>
    // </Table>
  )
}
