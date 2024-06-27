import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useBalance } from '../../context/balanceContext';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import Title from '../../components/Title';



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

export default function Chart() {
  const { id } = useParams();
  const {balance, getBalance} = useBalance();


  useEffect(()=>{
    getBalance(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  // console.log(balance);

  const getMonthLabel = (monthId) => {
    const month = months.find((acc) => acc.value === monthId);
    return month ? month.label : `mes ${monthId}`;
  };

  return (
    <React.Fragment>
       <Typography component="div" sx={{ maxWidth: "100%", overflow: "hidden" }}>
      <Title>Balance general</Title>
        <Typography variant="h4" component="h1" noWrap>
          ID: {balance.id}
        </Typography>
        <Typography color="text.secondary" noWrap>
          Fecha: {getMonthLabel(balance.mes)} del {balance.anio}
        </Typography>
      </Typography>
    </React.Fragment>
  );
}
