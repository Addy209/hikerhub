import { Box, Button, Divider, TextField, Tooltip } from '@mui/material'
import React from 'react'
import styles from './style.module.css'
import formSave from '@/server/server'
import Link from 'next/link'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import {signIn} from 'next-auth/react'

const backgroundWhite={
  backgroundColor:"white",
  borderRadius:'2px',
  width:'80%'
}



const LoginForm = () => {

  const handleSubmit=async(data)=>{
    console.log('In handleSubmit')
    const result=await signIn('credentials',{
      email:data.get('email'),
      password:data.get('password')
    })
    console.log(result)
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
        <Button variant='contained' size='large' type='submit' color='warning' >Sign in</Button>
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
          <Box sx={{fontSize:"large", fontWeight:900}}>Sign in Using</Box>
          <Box className={styles.social_icons}>
            <span><Tooltip title="Google" placement='top'><GoogleIcon onClick={()=>signIn('google')} sx={{fontSize:"xx-large"}} /></Tooltip></span>
            <span><Tooltip title="Facebook" placement='top'><FacebookIcon sx={{fontSize:"xx-large"}} /></Tooltip></span>
            <span><Tooltip title="Twitter" placement='top'><TwitterIcon sx={{fontSize:"xx-large"}} /></Tooltip></span>
            <span><Tooltip title="GitHub" placement='top'><GitHubIcon onClick={()=>signIn('github')} sx={{fontSize:"xx-large"}} /></Tooltip></span>

          </Box>
          <Box className={styles.forgotpassword_signup}>Don&apos;t have an account yet? <Link href={'#'} >Signup Now</Link></Box>
        </Box>
        
    </Box>
    </Box>
  )
}

export default LoginForm