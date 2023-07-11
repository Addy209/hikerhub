import * as React from 'react';
import { Box, Typography } from '@mui/material';
import styles from '../main.module.css'
import Image from 'next/image';

const Cards=(props)=> {
  return (
    <Box className={styles.cards} id={props.id} >
        <Box className={styles.cardsimage} data-aos={props.animate}><img src={props.imagelink} width="100" height="100" draggable={false} loading='lazy' quality={100} /></Box>
        <Box className={styles.cardText} data-aos={props.animate} >
            <Box className={styles.cardTitle}><Typography variant='h4'>{props.title}</Typography></Box>
            <Box className={styles.cardTitle}><Typography variant='h6'>Lorem ipsum dolor sit amet,  Sagittis orci a scelerisque purus semper eget duis. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Eu tincidunt tortor aliquam nulla.</Typography></Box>
        </Box>
        
    </Box>
  );
}

export default Cards