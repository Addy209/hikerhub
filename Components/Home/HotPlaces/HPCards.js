import React from "react";
import { Box, Button, Typography } from "@mui/material";
import styles from '../main.module.css'
import FastForwardTwoToneIcon from '@mui/icons-material/FastForwardTwoTone';

const HPCards=(props)=>{

    return <Box className={styles.hpcard}>
        <Box className={styles.hpcard_image}>
            <img src={props.img} height="100%" width="100%" />
        </Box>
        <Box className={styles.hpcard_text}>
            <Box className={styles.hpcard_text_head}>
                <Typography variant="h4">{props.heading}</Typography>
            </Box>
            <Box className={styles.hpcard_text_desc}>
            {props.desc}
            </Box>
            <Box sx={{margin:'2vh 0', overflow:"hidden"}}>
                <Button variant="contained" size="large" color="success" endIcon={<FastForwardTwoToneIcon sx={{color:"brown", fontSize:"larger"}}/>}>Experience Now</Button>
            </Box>
        </Box>
    </Box>
}

export default HPCards