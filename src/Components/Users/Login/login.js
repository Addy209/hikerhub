import { Box, Button, Divider, TextField } from '@mui/material'
import React from 'react'
import styles from './style.module.css'
import LoginImage from './loginImage'
import LoginForm from './loginForm'

const backgroundWhite={
  backgroundColor:"white",
  borderRadius:'2px',
  width:'80%'
}



const Login = () => {

  return (
    <Box className={styles.login}>
      <Box sx={{
        color:'white',
        marginTop:'-10ch',
        marginBottom:'0ch',
        width:'90%',
        textAlign:'center',
        textDecoration:'underline'
      }}><h1>Your Next Hike is Waiting</h1></Box>
      <Box className={styles.login_card}>
      <LoginImage />
      <LoginForm />
      </Box>
    </Box>
  )
}

export default Login