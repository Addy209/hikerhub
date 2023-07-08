import { Box, Typography } from '@mui/material'
import React from 'react'
import Header from '../Header/header'
import styles from './main.module.css'

const About=(props)=>{
return<>
<Box className={styles.aboutSection} sx={{height:"300vh"}}>
<Box id='about'><Typography variant='h2' >About Us</Typography></Box>
</Box>

</>
}

export default About