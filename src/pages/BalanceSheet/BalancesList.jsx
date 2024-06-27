import * as React from 'react';
// import Link from '@mui/material/Link';
import { useEffect } from 'react';
import { useBalance } from '../../context/balanceContext';
import { Table, TableHead, TableBody, TableRow, TableCell,  Button } from '@mui/material';
import Title from '../../components/Title';
import {Link} from 'react-router-dom';
// Generate Order Data
const months = [
  'Enero', 'Febrero', 'Marzo', 'Abril',
  'Mayo', 'Junio', 'Julio', 'Agosto',
  'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

export default function BalanceList() {
  const {balances, getBalances} = useBalance();

  useEffect(() => {
    getBalances();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <React.Fragment>
      <Title>Últimos Balances</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Año</TableCell>
            <TableCell>Mes</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {balances?.map((item, id) => (
            <TableRow key={id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.anio}</TableCell>
              <TableCell>{months[item.mes - 1]}</TableCell>
              <TableCell>
                <Button variant="outlined" color="primary" 
                component={Link}
                to={`/transactions/${item.id}`}
                >Editar</Button>
              </TableCell>
              <TableCell>
                <Button variant="outlined" color="secondary" >Eliminar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
