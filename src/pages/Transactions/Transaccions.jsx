import * as React from 'react';
import { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../../components/Title';
import { useParams } from 'react-router-dom';
import { useBalance } from '../../context/balanceContext';

const cuentas = [
  { value: 1, label: "Capital Social" },
  { value: 2, label: "Bancos" },
  { value: 3, label: "Equipo de reparto" },
  { value: 4, label: "Deposito en garantía" },
  { value: 5, label: "Rentas pagadas" },
  { value: 6, label: "Gastos de organización" },
  { value: 7, label: "Caja" },
  { value: 8, label: "Mobiliario y equipo" },
  { value: 9, label: "Primas de seguros" },
  { value: 10, label: "Mercancía" },
  { value: 11, label: "Equipo de Cómputo" },
  { value: 12, label: "Papelería" },
];

export default function Transaccions() {
  const { id } = useParams(); // Get the balance ID from URL params
  const {transactions, getTransactionsById} = useBalance();


  useEffect(()=>{
    getTransactionsById(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const getAccountLabel = (cuentaId) => {
    const cuenta = cuentas.find((acc) => acc.value === cuentaId);
    return cuenta ? cuenta.label : `cuenta ${cuentaId}`;
  };

  return (
    <React.Fragment>
      <Title>Últimas transacciones</Title>
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
          {transactions.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id + 1}</TableCell>
              <TableCell>{getAccountLabel(row.id_cuenta_debe)}</TableCell>
              <TableCell>{getAccountLabel(row.id_cuenta_haber)}</TableCell>
              <TableCell align="right">{`$${row.cantidad}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
