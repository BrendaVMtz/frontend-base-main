import * as React from 'react';
// import Link from '@mui/material/Link';
import { Table, TableHead, TableBody, TableRow, TableCell,  Button } from '@mui/material';

import Title from '../../components/Title';





// Generate Order Data

const months = [
  'Enero', 'Febrero', 'Marzo', 'Abril',
  'Mayo', 'Junio', 'Julio', 'Agosto',
  'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

function createData(id, year, month) {
  return { id, year, month };
}

const data = [
  createData(
    0,
    2024,
    2,
  ),
  createData(
    1,
    2024,
    1,
  ),
  createData(
    2, 
    2024,
    3,
  ),
  createData(
    3,
    2024,
    6,
  ),
];

// function preventDefault(event) {
//   event.preventDefault();
// }

export default function BalancesList() {
  
  return (
    <React.Fragment>
      <Title>Últimos Balances</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell> </TableCell>
            <TableCell>Año</TableCell>
            <TableCell>Mes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, id) => (
            <TableRow key={id}>
              <TableCell>
                <Button variant="outlined" color="primary" >Editar</Button>
              </TableCell>
              <TableCell>
                <Button variant="outlined" color="secondary" >Eliminar</Button>
              </TableCell>
              <TableCell>{item.year}</TableCell>
              <TableCell>{months[item.month - 1]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
