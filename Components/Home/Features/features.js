import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from '../main.module.css'
import Cards from './cards'
import FloatingActionButton from './FAB'

const Features=(props)=>{
    
    
    return <>
    <Box className={styles.features} onScroll={(e)=>{console.log(e)}}>
        <Box className={styles.center}><Typography variant='h2'>Features</Typography></Box>
        <Box className={styles.featurecards}>
        <Cards imagelink='/HomePage/feature3.jpg' title="Ready for Adventure" animate='fade-right' />
        <Cards imagelink='/HomePage/feature2.jpg' title="Explore Nature" id='reverse' animate='fade-left'/>
        <Cards imagelink='/HomePage/feature1.jpg' title="Make New Friends" animate='fade-right'/>

        <FloatingActionButton />

        </Box>
    </Box>
    </>
}


export default Features