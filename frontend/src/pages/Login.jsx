import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { TextField } from '@mui/material'; 
import '../assets/Styles.css'

const Login = () => {
  return (
    <div className='login'>
      <div className='contenedor'>

      <div className='iconoprincipal'>
        <AccountCircleIcon sx={{ fontSize: 200 }}/>
      </div>

      <div className='titulo'>
        <h1>LOGIN</h1>
      </div>
      
      <form>
        <div className='textfield'>
        <PersonOutlineOutlinedIcon sx={{ fontSize: 60 }}/> <TextField label='Usuario' variant='outlined' required/>
        </div>

        <div className='textfield'>
        <LockOutlinedIcon sx={{ fontSize: 60 }}/> <TextField label='Contraseña' type='password' variant='outlined' required/>      
        </div>

        <button>
            INGRESAR 
        </button>  

      <div className='links'>
        <div className='registro'>
          <NavLink id='linea' to="/registro">
          Si no tinenes cuenta, REGISTRATE
          </NavLink>
          </div>

          <div className='clave'>
          <NavLink id='linea' to="/olvide-clave">
          Olvide Clave
          </NavLink> 
          </div>  
      </div> 

      </form>
      </div>
    </div>
  )
}

export default Login