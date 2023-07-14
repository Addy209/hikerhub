import { Box, Button, Divider, TextField } from '@mui/material'
import React from 'react'
import styles from './style.module.css'
import formSave from '@/server/server'
import Link from 'next/link'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import * as jwt from 'jsonwebtoken'
import { publicEncrypt } from 'crypto-browserify'
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
      <LoginImage />
      <LoginForm />
    </Box>
  )
}

export default Login