import * as React from 'react';
import AssignmentIcon from '@mui/icons-material/Assignment';
// import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useBalance } from "../context/balanceContext";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";


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

export default function SecondaryListItems() {
  const { balances, getBalances } = useBalance();
  const [reversedBalances, setReversedBalances] = useState([]);

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
   <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" inset>
            Balances generales
          </ListSubheader>
        }
      >
        {reversedBalances.map((balance) => (
          <ListItemButton key={balance.id}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary={`${months[balance.mes - 1]} ${balance.anio}`} />
          </ListItemButton>
        ))}
      </List>
  </React.Fragment>
);
}