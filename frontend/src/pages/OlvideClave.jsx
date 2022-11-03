import React from 'react'
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { TextField } from '@mui/material';

const OlvideClave = () => {
  return (
    <>
    <div className='olvideclave'>
      <div className='contenedor'>
        <div>
          <PasswordOutlinedIcon sx={{ fontSize: 200 }}/>
        </div>

        <div className='titulo'>
          <h1>OLVIDE MI CONTRASEÑA</h1>
        </div>

        <form action="">
        <div className='textfield'>
          <EmailOutlinedIcon sx={{ fontSize: 60 }}/><TextField label='Correo' variant='outlined' required/>
        </div>

        <button>
          ENVIAR
        </button>
        </form>



      </div>
    </div>
    </>
  )
}

export default OlvideClave