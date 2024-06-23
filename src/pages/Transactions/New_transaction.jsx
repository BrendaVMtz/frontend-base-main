import * as React from "react";
// import Typography from '@mui/material/Typography';

import Title from './Title';
import {
  FormControl,
  InputLabel,
  Select,
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

export default function New_transaction() {
  return (
    <React.Fragment>
      <Title>Agregar transacción</Title>
      <form /*onSubmit={}*/>
        <Grid container spacing={2}>
          {/*Cuenta debe */}
          <Grid item xs={12} md={6}>
            <FormControl /*className={classes.formControl}*/ fullWidth>
              <InputLabel id="month-label">Cuenta debe</InputLabel>
              <Select
                labelId="month-label"
                id="month"
                name="month"
                // value={formData.month}
                // onChange={handleInputChange}
                label="Select Month"
              >
                <MenuItem value="">Seleccionar cuenta</MenuItem>
                <MenuItem value="January">Capital Social</MenuItem>
                <MenuItem value="February">Bancos</MenuItem>
                <MenuItem value="March">Equipo de reparto</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/*Cuenta haber */}
          <Grid item xs={12} md={6}>
            <FormControl /*className={classes.formControl}*/ fullWidth>
              <InputLabel id="month-label">Cuenta haber</InputLabel>
              <Select
                labelId="month-label"
                id="month"
                name="month"
                // value={formData.month}
                // onChange={handleInputChange}
                label="Select Month"
              >
                <MenuItem value="">Seleccionar cuenta</MenuItem>
                <MenuItem value="January">Capital Social</MenuItem>
                <MenuItem value="February">Bancos</MenuItem>
                <MenuItem value="March">Equipo de reparto</MenuItem>
              </Select>
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
