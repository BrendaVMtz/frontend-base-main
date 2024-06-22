// imkport React from 'react'
import { useAuth } from "../context/authContext"

const Logout = () => {

    const {logout} = useAuth();

  return (
    <button type="button" onClick={logout}>logput</button>
  )
}

export default Logout