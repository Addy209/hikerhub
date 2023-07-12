import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import styles from './style.module.css'
import formSave from '@/server/server'
import { Padding } from '@mui/icons-material'
import Link from 'next/link'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const backgroundWhite={
  backgroundColor:"white",
  borderRadius:'2px',
  width:'80%'
}

const Login = () => {

  const handleSubmit=e=>{
    e.preventDefault()
    e.returnValue = true;
  }

  
  return (
    <Box className={styles.loginContainer}>
    <Box className={styles.loginForm} component="form" action={formSave}>
     <Box className={styles.loginFields}>
    <TextField
          required
          id="outlined-required"
          placeholder='E-mail*'
          margin="normal"
          name="email"
          type='email'
          sx={backgroundWhite}
        />
        </Box> 
        <Box className={styles.loginFields}>
        <TextField
          required
          id="outlined-required"
          placeholder='Password*'
          name="password"
          type='password'
          sx={backgroundWhite}
        />
        </Box>
        <Box className={styles.loginFields}>
        <Button variant='contained' size='large' type='submit' onClick={(e)=>handleSubmit(e)}>Login</Button>
        </Box>
        <Box className={styles.forgotpassword}>
        <Box className={styles.forgotpassword_signup}><Link href={'#'} >Signup</Link></Box>
        <Box className={styles.forgotpassword_forget}><Link href={'#'} >Forgot Password?</Link></Box>
        </Box>
        <Box className={styles.or}>
          <Box sx={{width:"40%", borderTop:"3px solid black"}}></Box>
          <Box sx={{width:"8%", textAlign:"center", fontSize:"x-large"}}>OR</Box>
          <Box sx={{width:"40%", borderTop:"3px solid black"}} ></Box>
        </Box>
        <Box className={styles.social}>
          <Box sx={{fontSize:"large", fontWeight:900}}>Signin Using</Box>
          <Box className={styles.social_icons}>
            <span><GoogleIcon sx={{fontSize:"xx-large"}} /></span>
            <span><FacebookIcon sx={{fontSize:"xx-large"}} /></span>
            <span><TwitterIcon sx={{fontSize:"xx-large"}} /></span>
          </Box>
        </Box>
        
    </Box>
    </Box>
  )
}

export default Login