import * as React from "react";
import Title from "../../components/Title";
import { MenuItem, TextField, Button, Grid } from "@mui/material";
import { useBalance } from "../../context/balanceContext";

const months = [
  { value: 1, label: "Enero" },
  { value: 2, label: "Febrero" },
  { value: 3, label: "Marzo" },
  { value: 4, label: "Abril" },
  { value: 5, label: "Mayo" },
  { value: 6, label: "Junio" },
  { value: 7, label: "Julio" },
  { value: 8, label: "Agosto" },
  { value: 9, label: "Septiembre" },
  { value: 10, label: "Octubre" },
  { value: 11, label: "Noviembre" },
  { value: 12, label: "Diciembre" },
];

export default function New_balance() {
  const [year, setYear] = React.useState("");
  const [month, setMonth] = React.useState("");
  const { createBalance } = useBalance();

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const balance = {
      anio: year,
      mes: month,
    };

    try {
      await createBalance(balance);
      setYear("");
      setMonth("");
    } catch (error) {
      console.log("Error creating balance", error);
    }

    // Add your logic here to handle form submission
  };
  return (
    <React.Fragment>
      <Title>Nuevo Balance General</Title>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              select
              label="Seleccionar año"
              value={year}
              onChange={handleYearChange}
              variant="outlined"
              required
              id="select-year"
            >
              {[...Array(10)].map((_, index) => (
                <MenuItem key={index} value={2024 - index}>
                  {2024 - index}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              select
              label="Seleccionar mes"
              value={month}
              onChange={handleMonthChange}
              variant="outlined"
              required
              id="select-month"
            >
              {months.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
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
