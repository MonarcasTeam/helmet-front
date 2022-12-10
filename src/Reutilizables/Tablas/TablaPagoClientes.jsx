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
import { getPagoCliente } from '../../helpers/pagoCliente';

export const TablaPagoClientes = () => {
  const [pagoCliente, setPagoCliente] = useState([]);

  useEffect(() => {
    getPagoCliente().then((pc) => {
      setPagoCliente(pc);
    });
  },[]);
  console.log(pagoCliente)
  function createData(nombreEmpresa, rutEmpresa, idEstPago) {
    return { nombreEmpresa, rutEmpresa, idEstPago };
  }

  let rows = [];

  pagoCliente?.map((pc) => {
    rows.push(createData(pc.nombreEmpresa, pc.rutEmpresa, pc.idEstPago))
  });

  return (

    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow className='primeraFila'>
          <TableCell><b>#</b></TableCell>
          <TableCell><b>Empresa</b></TableCell>
          <TableCell><b>Rut Empresa</b></TableCell>
          <TableCell><b>Estado de pago</b></TableCell>
          <TableCell><b>Detalle</b></TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow
            key={row.nombreEmpresa}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              <b>{index + 1}</b>
            </TableCell>
            <TableCell component="th" scope="row">
              {row.nombreEmpresa}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.rutEmpresa}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.idEstPago}
            </TableCell>
            <TableCell component="th" scope="row">
            <Button className="verDetalle" variant="success"><Link to="/admin/PagoDetail">Ver detalle</Link></Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    
    // <Table striped bordered hover size="md" className="masterTab">
    //   <thead>
    //     <tr className="primeraFila">
    //       <th>Código</th>
    //       <th>Empresa</th>
    //       <th>Rut empresa</th>
    //       <th>Estado de pago</th>
    //       <th>Detalle</th>
    //     </tr>
    //   </thead>
    //   <tbody className="tabAccidentes">
    //     <tr>
    //       <td>100001</td>
    //       <td>Mercadolibre CL</td>
    //       <td>11.111.111-1</td>
    //       <td>Al día</td>
    //       <td className="detalleButton"><Button className="verDetalle" variant="success"><Link to="/admin/PagoDetail1">Ver detalle</Link></Button></td>
    //     </tr>
    //     <tr>
    //       <td>100002</td>
    //       <td>Duoc UC</td>
    //       <td>22.222.222-2</td>
    //       <td>Pendiente</td>
    //       <td className="detalleButton"><Button className="verDetalle" variant="success"><Link to="/admin/PagoDetail2">Ver detalle</Link></Button></td>
    //     </tr>
    //     <tr>
    //       <td>100003</td>
    //       <td>Blue Express</td>
    //       <td>33.333.333-3</td>
    //       <td>Atrasado</td>
    //       <td className="detalleButton"><Button className="verDetalle" variant="success">Ver detalle</Button></td>
    //     </tr>
    //   </tbody>
    // </Table>
  )
}
