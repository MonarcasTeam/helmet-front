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
import { getRegistroaccidentes } from '../../helpers/registroaccidentes';

export const TablaMain = () => {
  const [registroaccidentes, setRegistroaccidentes] = useState([]);

  useEffect(() => {
    
    getRegistroaccidentes().then((ra) => {
      setRegistroaccidentes(ra);
    })
  },[])
  console.log(registroaccidentes)
  function createData(idCliente, idAccidente, idUsuario, idEstado) {
    return { idCliente, idAccidente, idUsuario, idEstado };
  }

  let rows = [];

  registroaccidentes?.map((ra) => {
    rows.push(createData(ra.idCliente, ra.idAccidente, ra.idUsuario, ra.idEstado))
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='primeraFila'>
            <TableCell><b>#</b></TableCell>
            <TableCell><b>Empresa</b></TableCell>
            <TableCell><b>Accidente</b></TableCell>
            <TableCell><b>Profesional Asignado</b></TableCell>
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
                {row.idAccidente}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.idUsuario}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.idEstado}
              </TableCell>
              <TableCell component="th" scope="row">
              <td className="detalleButton"><Button className="verDetalle" variant="success"><Link to="/admin/clientDetail">Editar cliente</Link></Button></td>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    // <Table striped bordered hover size="md" className="masterTabCli">
    //   <thead>
    //     <tr className="primeraFila">
    //       <th>Reporte Nº</th>
    //       <th>Nombre</th>
    //       <th>Ubicación</th>
    //       <th>Fecha</th>
    //       <th></th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <td>100123</td>
    //       <td>Pedro Picapiedra</td>
    //       <td>Casino, AMB</td>
    //       <td>03/07/2022</td>
    //       <td className="detalleButton"><Button className="verDetalle" variant="success"><Link to="/cli/AccDetalle">Ver actividades</Link></Button></td>
    //     </tr>
    //     <tr>
    //       <td>100254</td>
    //       <td>Pablo Marmol</td>
    //       <td>Patio central, CM</td>
    //       <td>16/07/2022</td>
    //       <td className="detalleButton"><Button className="verDetalle" variant="success">Ver actividades</Button></td>
    //     </tr>
    //     <tr>
    //       <td>100456</td>
    //       <td>Alfonso Alamos</td>
    //       <td>Bodega 5, CM</td>
    //       <td>22/08/2022</td>
    //       <td className="detalleButton"><Button className="verDetalle" variant="success">Ver actividades</Button></td>
    //     </tr>
    //   </tbody>
    // </Table>
  )
}
