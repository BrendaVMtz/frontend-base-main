import * as React from "react";
// import Typography from '@mui/material/Typography';

import Title from '../../components/Title';
import {
  FormControl,
  // InputLabel,
  // Select,
  MenuItem,
  TextField,
  Button,
  Grid,
} from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     minWidth: 200,
//     marginBottom: theme.spacing(2),
//   },
//   textField: {
//     marginBottom: theme.spacing(2),
//   },
// }));

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
  
  const [cuentaD, setCuentaD] = React.useState("");
  const [cuentaH, setCuentaH] = React.useState("");

  const handleCuentaDebeChange = (event) => {
    setCuentaD(event.target.value);
  };
  const handleCuentaHaberChange = (event) => {
    setCuentaH(event.target.value);
  };


  return (
    <React.Fragment>
      <Title>Agregar transacción</Title>
      <form /*onSubmit={}*/>
        <Grid container spacing={2}>
          {/*Cuenta debe */}
          <Grid item xs={12} md={6}>
            <FormControl /*className={classes.formControl}*/ fullWidth>
            <TextField
              fullWidth
              select
              label="Cuenta debe"
              value={cuentaD}
              onChange={handleCuentaDebeChange}
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
              label="Cuenta haber"
              value={cuentaH}
              onChange={handleCuentaHaberChange}
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
              id="integerValue"
              name="integerValue"
              label="Enter an Integer"
              type="number"
              // className={classes.textField}
              // value={formData.integerValue}
              // onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
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
