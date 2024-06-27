import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useAuth } from '../../context/authContext';

import Title from '../../components/Title';



export default function Profile() {
  const {user} = useAuth();


  return (
    <React.Fragment>
      <Title>Bienvenido</Title>
      <Typography component="p" variant="h4">
        {user.nombre}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {user.email}
      </Typography>
    </React.Fragment>
  );
}
