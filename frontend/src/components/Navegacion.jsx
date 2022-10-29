import React from 'react'
import { NavLink } from 'react-router-dom'

const Navegacion = () => {
  return (
  <>
  <div>
    <div>
    <NavLink to='/'>
      Login
    </NavLink>
    </div>

    <div>
    <NavLink to='/registro'>
      Registrar
    </NavLink>
    </div>

    <div>
    <NavLink to='/olvide-clave'>
      Olvide Clave
    </NavLink>
    </div>

    <div>
    <NavLink to='/contactos'>
      Contactos
    </NavLink>
    </div>
  </div>
  </>
  )
}

export default Navegacion