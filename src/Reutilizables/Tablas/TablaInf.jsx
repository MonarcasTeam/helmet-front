import { useEffect, useState } from 'react';

//importaciones
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getRegistroinforme } from '../../helpers/registroinforme';

export const TablaInf = () => {
  const [registroinforme, setRegistroinforme] = useState();

  useEffect(() => {
    getRegistroinforme().then((i) => {
      setRegistroinforme(i);
    });
  },[]);
  console.log(registroinforme)
  function createData(fecha, nombreInfo) {
    return { fecha, nombreInfo };
  }

  let rows = [];

  registroinforme?.map((i) => {
    rows.push(createData(i.fecha, i.nombreInfo))
  });

  return (
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='primeraFila'>
            <TableCell><b>#</b></TableCell>
            <TableCell><b>Fecha</b></TableCell>
            <TableCell><b>Informe</b></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.nombreInfo}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <b>{index + 1}</b>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.fecha}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.nombreInfo}
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    // <Table striped bordered hover size="md" className="masterTabPa">
    //   <thead>
    //     <tr className="primeraFila">
    //       <th>Nº Informe</th>
    //       <th>Fecha</th>
    //       <th>Informes</th>
    //     </tr>
    //   </thead>
    //   <tbody className="tabPagos">
    //     <tr>
    //       <td>10001</td>
    //       <td>05/08/2022</td>
    //       <td><a href="#">Ver informe</a></td>
    //     </tr>
    //     <tr>
    //       <td>10002</td>
    //       <td>05/08/2022</td>
    //       <td><a href="#">Ver informe</a></td>
    //     </tr>
    //   </tbody>
    // </Table>
  )
}
