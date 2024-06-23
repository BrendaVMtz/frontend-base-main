import * as React from 'react';
import Typography from '@mui/material/Typography';

import Title from './Title';



export default function Chart() {

  return (
    <React.Fragment>
      <Title>Balance general</Title>
      <Typography component="p" variant="h4">
        Id: 15
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on March, 2019
      </Typography>
    </React.Fragment>
  );
}
