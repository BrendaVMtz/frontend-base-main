import * as React from "react";
// import Link from '@mui/material/Link';
import { useEffect, useState } from "react";
import { useBalance } from "../../context/balanceContext";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";
import Title from "../../components/Title";
import { Link } from "react-router-dom";
// Generate Order Data
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export default function BalanceList() {
  const { balances, getBalances, deleteBalance } = useBalance();
  const [reversedBalances, setReversedBalances] = useState([]);

  const handleDelete = async (id) => {
    try {
      deleteBalance(id);
      // Actualiza la lista de balances después de la eliminación
      getBalances();
    } catch (error) {
      console.error("Error deleting balance:", error);
    }
  };

  useEffect(() => {
    getBalances();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Invertir el orden de balances y actualizar el estado
    if (balances) {
      const reversed = [...balances].reverse();
      setReversedBalances(reversed);
    }
  }, [balances]);

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
          {reversedBalances?.map((item, id) => (
            <TableRow key={id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.anio}</TableCell>
              <TableCell>{months[item.mes - 1]}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="primary"
                  component={Link}
                  to={`/transactions/${item.id}`}
                >
                  Editar
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleDelete(item.id)}
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
