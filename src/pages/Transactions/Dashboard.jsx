import * as React from "react";
import { /*styled*/ createTheme /*ThemeProvider*/ } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import { useMediaQuery } from "@mui/material";
import Chart from "./Chart";
import New_transaction from "./New_transaction";
import Transaccions from "./Transaccions";
import Layout from "../Layout";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const [idTransaction, setIDTransaction] = React.useState(null); //Cuenta debe

  const isScreenWide = useMediaQuery(defaultTheme.breakpoints.up("md"));

  return (
    <Layout>
      {/* Chart */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} lg={3}>
            <Paper
              sx={{
                p: 4,
                display: "flex",
                flexDirection: "column",
                height: isScreenWide ? 260 : 180,
              }}
            >
              <Chart />
            </Paper>
          </Grid>
          {/* Agregar transaccion */}
          <Grid item xs={12} md={9} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: isScreenWide ? 260 : 320,
              }}
            >
              <New_transaction setIDTransaction = {setIDTransaction}/>
            </Paper>
          </Grid>
          {/* Lista transacciones */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Transaccions idTransaction = {idTransaction} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
