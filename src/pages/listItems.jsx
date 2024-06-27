import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import { Link } from 'react-router-dom';


export const mainListItems = (
  <React.Fragment>
    {/* Nuevo balance */}
    <ListItemButton component={Link} to="/balance-general">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Balances" />
    </ListItemButton> 
    {/* Transacciones */}
    <ListItemButton component={Link} to="/transactions/1">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Transacciones" />
    </ListItemButton>
  </React.Fragment>
);

