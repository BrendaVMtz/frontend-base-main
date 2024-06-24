// import * as React from "react";
import { createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useMediaQuery } from "@mui/material";

import Profile from "./Profile";
import New_balance from "./New_balance";
import BalancesList from "./BalancesList";
import Layout from "../Layout";

const defaultTheme = createTheme();

export default function Dashboard() {
  const isScreenWide = useMediaQuery(defaultTheme.breakpoints.up("md"));
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Perfil */}
          <Grid item xs={12} md={3} lg={3}>
            <Paper
              sx={{
                p: 4,
                display: "flex",
                flexDirection: "column",
                height: 180,
              }}
            >
              <Profile />
            </Paper>
          </Grid>

          {/* Agregar balance general */}
          <Grid item xs={12} md={9} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: isScreenWide ? 180 : 260,
              }}
            >
              <New_balance />
            </Paper>
          </Grid>
          {/* Lista balances */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <BalancesList />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
