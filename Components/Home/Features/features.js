import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from '../main.module.css'
import Cards from './cards'
import FloatingActionButton from './FAB'
import useMediaQuery from '@mui/material/useMediaQuery';


const Features=(props)=>{
    const matches = useMediaQuery('(min-width:768px)');
    
    return <>
    <Box className={styles.features} onScroll={(e)=>{console.log(e)}}>
        <Box className={styles.center}><Typography variant='h2'>Features</Typography></Box>
        <Box className={styles.featurecards}>
        <Cards imagelink='https://ik.imagekit.io/mce8nb2epw/public/HomePage/feature3.jpg?updatedAt=1688844374517' title="Ready for Adventure" animate={matches?'fade-right':null} />
        <Cards imagelink='https://ik.imagekit.io/mce8nb2epw/public/HomePage/feature2.jpg?updatedAt=1688844375192' title="Explore Nature" id='reverse' animate={matches?'fade-left':null}/>
        <Cards imagelink='https://ik.imagekit.io/mce8nb2epw/public/HomePage/feature1.jpg?updatedAt=1688844373928' title="Make New Friends" animate={matches?'fade-right':null}/>

        <FloatingActionButton />

        </Box>
    </Box>
    </>
}


export default Features