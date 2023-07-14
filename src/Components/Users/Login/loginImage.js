import { Box } from '@mui/material'
import React from 'react'
import styles from './style.module.css'

const LoginImage = () => {
  return (
    <Box className={styles.loginImage}>
        <img src='https://ik.imagekit.io/mce8nb2epw/public/HomePage/login.jpg?updatedAt=1689361368939' alt='loginImage' draggable='false' className={styles.loginImage_img} />
    </Box>
  )
}

export default LoginImage