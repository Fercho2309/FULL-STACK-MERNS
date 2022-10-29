import React from 'react'
import '../assets/Styles.css'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import { TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Registro = () => {
  return (
    <>
    <div className='registro'>
      <div className='contenedor'>
        <div className='IconoPrincipal'>
          <AppRegistrationIcon sx={{ fontSize:200 }}/>
        </div>

        <div className='titulo'>
          <h1>REGISTRO</h1>
        </div>

        <form action="">

          <div className='nombres'>

            <div className='textfieldnombre'>
              <PersonOutlineOutlinedIcon sx={{ fontSize: 60 }}/> <TextField id='nombre' label='Nombre' variant='outlined' required/>
            </div>

            <div className='textfieldapellido'>
              <TextField label='Apellido' variant='outlined' required/>
            </div>

          </div>
       
          <div className='textfield'>
            <LocalPhoneOutlinedIcon sx={{ fontSize: 60 }}/> <TextField id='telefono' type='number' label='Telefono' variant='outlined' required/>
          </div>
          
          <div className='textfield'>
            <AddLocationAltOutlinedIcon sx={{ fontSize: 60 }}/> <TextField label='Dirección' variant='outlined' required/>
          </div>
          
          <div className='textfield'>
            <EmailOutlinedIcon sx={{ fontSize: 60 }}/> <TextField type='email' label='Correo' variant='outlined' required/>
          </div>

          <div className='contraseñas'>
            <div className='textfieldpassword'>
              <LockOutlinedIcon sx={{ fontSize: 60 }}/> <TextField type='password' label='Contraseña' variant='outlined' required/>
            </div>

          <div className='textfieldconfirmacion'>
            <TextField type='password' label='Confirmación' variant='outlined' required/>
          </div>
          </div>

          <button>
            REGISTAR
          </button>  
          
          <div className='links'>
            <div className='prefiero'>
              <NavLink id='linea' to="/">
                Prefiero Iniciar Sesión
                </NavLink>
            </div>
          </div>

        </form>

      </div>
    </div>
    </>
  )
}

export default Registro