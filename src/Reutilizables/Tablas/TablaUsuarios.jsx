// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import { Link } from "react-router-dom";

import { useEffect, useState } from 'react';

//importaciones
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getUser } from '../../helpers/user';

export const TablaUsuarios = () => {

  const [user, setUser] = useState();

  useEffect(() => {
    getUser().then((u) => {
      setUser(u);
    });
  },[]);

  function createData(name, userName, roles, idCliente) {
    return { name, userName, roles, idCliente };
  }

  let rows = [];

  user?.map((u) => {
    rows.push(createData(u.name, u.userName, u.roles, u.idCliente))
  });

  return (

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='primeraFila'>
            <TableCell><b>#</b></TableCell>
            <TableCell><b>Nombre</b></TableCell>
            <TableCell><b>Usuario</b></TableCell>
            <TableCell><b>Tipo de usuario</b></TableCell>
            <TableCell><b>Empresa</b></TableCell>
            <TableCell><b>Detalle</b></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <b>{index + 1}</b>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.userName}
              </TableCell>
              <TableCell component="th" scope="row">
                ${row.roles}
              </TableCell>
              <TableCell component="th" scope="row">
                ${row.idCliente}
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    // <Table striped bordered hover size="md" className="masterTab">
    //   <thead>
    //     <tr className="primeraFila">
    //       <th>Nombre</th>
    //       <th>Usuario</th>
    //       <th>Tipo de usuario</th>
    //       <th>Empresa</th>
    //     </tr>
    //   </thead>
    //   <tbody className="tabAccidentes">
    //     <tr>
    //       <td>Johann Gómez Norambuena</td>
    //       <td>JGOMEZN</td>
    //       <td>Administrador</td>
    //       <td>Helmet</td>
    //       <td className="detalleButton"><Button className="verDetalle" variant="success">Ver detalle</Button></td>
    //     </tr>
    //     <tr>
    //       <td>Guillermo carrasco Araya</td>
    //       <td>GCARRASCOA</td>
    //       <td>Profesional</td>
    //       <td>Helmet</td>
    //       <td className="detalleButton"><Button className="verDetalle" variant="success">Ver detalle</Button></td>
    //     </tr>
    //     <tr>
    //       <td>Juan Gaete Stangl</td>
    //       <td>JGAETES</td>
    //       <td>Cliente</td>
    //       <td>Duoc UC</td>
    //       <td className="detalleButton"><Button className="verDetalle" variant="success"><Link to="/admin/detailUsers">Ver detalle</Link></Button></td>
    //     </tr>
    //   </tbody>
    // </Table>
  )
}
