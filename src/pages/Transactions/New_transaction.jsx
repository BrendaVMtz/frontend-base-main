import * as React from "react";
import { useParams } from 'react-router-dom';

import Title from '../../components/Title';
import {
  FormControl,
  // InputLabel
  MenuItem,
  TextField,
  Button,
  Grid,
} from "@mui/material";

// import { useBalance } from "../../context/balanceContext";

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

export default function New_transaction() {
  const { id } = useParams();
  
  const [debitAcc, setDebitAcc] = React.useState(""); //Cuenta debe
  const [creditAcc, setCreditAcc] = React.useState(""); //Cuenta haber
  const [amount, setAmount] = React.useState("");
  
 ///usar el contexto

  const handleDebitAccountChange = (event) => {
    setDebitAcc(event.target.value);
  };
  const handleCreditAccChange = (event) => {
    setCreditAcc(event.target.value);
  };

  const handleAmmountChange = (event) => {
    const value = event.target.value;
    //verifica si es un numero entero positivo
    if (value === '' || /^\d+$/.test(value)) {
      setAmount(value);
    }
  };

  //enviar el formulario
  const handleSumbit = async (event) => {
    event.preventDefault();

    const transaccion = {
      balance_id: id,
      id_cuenta_debe: debitAcc,
      id_cuenta_haber: creditAcc,
      cantidad: amount
    };
    console.log(transaccion);

    

  }


  return (
    <React.Fragment>
      <Title>Agregar transacción</Title>
      <form onSubmit={handleSumbit}>
        <Grid container spacing={2}>
          {/*Cuenta debe */}
          <Grid item xs={12} md={6}>
            <FormControl /*className={classes.formControl}*/ fullWidth>
            <TextField
              fullWidth
              select
              label="Cuenta debe"
              value={debitAcc}
              onChange={handleDebitAccountChange}
              variant="outlined"
              required
            >
              {cuentas.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            </FormControl>
          </Grid>
          {/*Cuenta haber */}
          <Grid item xs={12} md={6}>
            <FormControl /*className={classes.formControl}*/ fullWidth>
            <TextField
              fullWidth
              select
              id="creditAccount"
              name="creditAccount"
              label="Cuenta haber"
              value={creditAcc}
              onChange={handleCreditAccChange}
              variant="outlined"
              required
            >
              {cuentas.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            </FormControl>
          </Grid>
          <Grid item xs={12} >
            <TextField
              fullWidth
              id="integerValue"
              label="Monto"
              name="integerValue"
              type="text" 
              value={amount}
              onChange={handleAmmountChange}
              variant="outlined"
              required
              InputProps={{
                inputProps: {
                  pattern: "[0-9]*", 
                },
              }}
              error={amount !== '' && !/^\d+$/.test(amount)}
              helperText={amount !== '' && !/^\d+$/.test(amount) ? 'Ingresa un numero positivo entero' : ''}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Añadir
            </Button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}

// import * as React from 'react';
// import Link from '@mui/material/Link';
// import Typography from '@mui/material/Typography';
// import Title from './Title';

// function preventDefault(event) {
//   event.preventDefault();
// }

// export default function New_transaction() {
//   return (
//     <React.Fragment>
//       <Title>Recent Deposits</Title>
//       <Typography component="p" variant="h4">
//         $3,024.00
//       </Typography>
//       <Typography color="text.secondary" sx={{ flex: 1 }}>
//         on 15 March, 2019
//       </Typography>
//       <div>
//         <Link color="primary" href="#" onClick={preventDefault}>
//           View balance
//         </Link>
//       </div>
//     </React.Fragment>
//   );
// }
