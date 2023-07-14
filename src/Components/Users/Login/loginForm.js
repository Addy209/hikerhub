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

const backgroundWhite={
  backgroundColor:"white",
  borderRadius:'2px',
  width:'80%'
}



const LoginForm = () => {

  const key=process.env.AES_KEY
  console.log(key)
  const handleSubmit=data=>{
    console.log('In handleSubmit')
    const loginData={
      email:data.get('email'),
      password:data.get('password')
    }
    console.log(encData)
    formSave(encData)
  }

  
  return (
    <Box className={styles.loginContainer}>
    <Box className={styles.loginForm} component="form" action={handleSubmit}>
      <Box className={styles.logo}><img src="https://ik.imagekit.io/mce8nb2epw/public/HomePage/HeroSVG.png?updatedAt=1688844374563" alt="logo" className={styles.LogoImage} /></Box>
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
        <Button variant='contained' size='large' type='submit' color='warning' >Login</Button>
        </Box>
        <Box className={styles.forgotpassword}>
        <Box className={styles.forgotpassword_forget}><Link href={'#'} >Forgot Password?</Link></Box>
        </Box>
        <Box className={styles.or}>
          <Box sx={{width:"40%", borderTop:"3px solid black"}}></Box>
          <Box sx={{width:"10%", textAlign:"center", fontSize:"x-large"}}>or</Box>
          <Box sx={{width:"40%", borderTop:"3px solid black"}} ></Box>
        </Box>
        <Box className={styles.social}>
          <Box sx={{fontSize:"large", fontWeight:900}}>Signin Using</Box>
          <Box className={styles.social_icons}>
            <span><GoogleIcon sx={{fontSize:"xx-large"}} /></span>
            <span><FacebookIcon sx={{fontSize:"xx-large"}} /></span>
            <span><TwitterIcon sx={{fontSize:"xx-large"}} /></span>
          </Box>
          <Box className={styles.forgotpassword_signup}>Don&apos;t have an account yet? <Link href={'#'} >Signup Now</Link></Box>
        </Box>
        
    </Box>
    </Box>
  )
}

export default LoginForm