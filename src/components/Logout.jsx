// imkport React from 'react'
import { useAuth } from "../context/authContext"
import Button from '@mui/material/Button';

const Logout = () => {

    const {logout} = useAuth();

  return (
    <div>

    <Button variant="contained" color="success" onClick={logout} >Cerrar sesion</Button>
    {/* <button type="button" onClick={logout}>logput</button> */}
    </div>
  )
}

export default Logout