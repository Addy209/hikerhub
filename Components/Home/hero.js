import { Box, Typography } from '@mui/material'
import React from 'react'
import Header from '../Header/header'
import styles from './main.module.css'
import Image from 'next/image'

const Hero=(props)=>{
return<>
<Box className={styles.HeroContainer} id='home'>
    <img src='https://ik.imagekit.io/mce8nb2epw/public/HomePage/background.jpg?updatedAt=1688844373816' draggable={false} width={0} height={0} loading='lazy' quality={100} />
</Box>
<Box className={styles.HText}>
    You are in control of your trips<br/> Set price, get quotations.
</Box>

</>
}

export default Hero