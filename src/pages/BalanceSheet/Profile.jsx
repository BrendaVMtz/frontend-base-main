import * as React from "react";
import Typography from "@mui/material/Typography";
import { useAuth } from "../../context/authContext";

import Title from "../../components/Title";

export default function Profile() {
  const { user } = useAuth();

  return (
    <React.Fragment>
      <Typography component="div" sx={{ maxWidth: "100%", overflow: "hidden" }}>
        <Title>Bienvenido</Title>
        <Typography variant="h4" component="h1" noWrap>
          {user.nombre}
        </Typography>
        <Typography color="text.secondary" noWrap>
          {user.email}
        </Typography>
      </Typography>
    </React.Fragment>
  );
}
