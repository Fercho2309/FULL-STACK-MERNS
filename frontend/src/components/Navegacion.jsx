import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Navegacion = () => {
  return (
  <>
  <div class="wrapper">
        <input type="checkbox" id="btn"></input>
        <label for="btn" class="menu-btn">
           <MenuOutlinedIcon/>
        </label>

        <nav id="sidebar">
          <div class="title">MENU</div>
          <ul class="list-items">

            <li>
              <NavLink id='linea' to='/'>
                Login
                </NavLink>
            </li>
            
            <li>
              <NavLink id='linea' to='/registro'>
                Registrar
              </NavLink>
            </li>
            
            <li>
              <NavLink id='linea' to='/olvide-clave'>
                Olvide Clave
              </NavLink>
            </li>
            
            <li>
              <NavLink id='linea' to='/contactos'>
                Contactos
              </NavLink>
            </li>
            
            <li>
              <NavLink id='linea' to='/acerca-de'>
                Acerca De
              </NavLink>
            </li>

            </ul>
        </nav>
    </div>
  </>
  )
}

export default Navegacion