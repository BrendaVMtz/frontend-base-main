import * as React from 'react';
import Typography from '@mui/material/Typography';

import Title from '../../components/Title';



export default function Profile() {

  return (
    <React.Fragment>
      <Title>Usuario</Title>
      <Typography component="p" variant="h4">
        Nombre
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Correo
      </Typography>
    </React.Fragment>
  );
}
