import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";
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

// eslint-disable-next-line react/prop-types
export default function Transaccions({idTransaction}) {
  const { id } = useParams(); // Get the balance ID from URL params
  const {transactions, getTransactionsById, deleteTransaccion} = useBalance();
  const [reversedTransactions, setReversedTransactions] = useState([]);


  //Funcion  que trae las transacciones con el id de la URL
  useEffect(()=>{
    getTransactionsById(id);
  },[]);

  useEffect(() => {
    // Invertir el orden de transactions y actualizar el estado
    if (transactions) {
      const reversed = [...transactions].reverse();
      setReversedTransactions(reversed);
    }
  }, [transactions]);



  const getAccountLabel = (cuentaId) => {
    const cuenta = cuentas.find((acc) => acc.value === cuentaId);
    return cuenta ? cuenta.label : `cuenta ${cuentaId}`;
  };

  const handleDelete = async (id,balance_id) => {
    try {  
      const balance = {
        balance_id: balance_id
      }
      deleteTransaccion(id,balance);
      // Actualiza la lista de transacciones después de la eliminación
      // getTransactionsById();
    } catch (error) {
      console.error("Error deleting transaccion:", error);
    }
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
            <TableCell>Cantidad</TableCell>
            <TableCell align="right">Acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reversedTransactions.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{getAccountLabel(row.id_cuenta_debe)}</TableCell>
              <TableCell>{getAccountLabel(row.id_cuenta_haber)}</TableCell>
              <TableCell>{`$${row.cantidad}`}</TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleDelete(row.id, id)}
                >
                  Eliminar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
