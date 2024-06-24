import * as React from 'react';
// import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../../components/Title';

// Generate Order Data
function createData(id, name_origin, name_dest, amount) {
  return { id, name_origin, name_dest, amount };
}

const rows = [
  createData(
    0,
    'Capital Social',
    'Bancos',
    10000,
  ),
  createData(
    1,
    'Capital Social',
    'Bancos',
    10000,
  ),
  createData(
    2, 
    'Capital Social',
    'Bancos',
    10000,
  ),
  createData(
    3,
    'Capital Social',
    'Bancos',
    10000,
  ),
];

// function preventDefault(event) {
//   event.preventDefault();
// }

export default function Transaccions() {
  return (
    <React.Fragment>
      <Title>Últimos balances generales</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Cuenta debe</TableCell>
            <TableCell>Cuenta haber</TableCell>
            <TableCell align="right">Cantidad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id + 1}</TableCell>
              <TableCell>{row.name_origin}</TableCell>
              <TableCell>{row.name_dest}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
    </React.Fragment>
  );
}
