import * as React from 'react';
import Box from '@mui/material/Box';
import { Tooltip } from '@mui/material';
import Fab from '@mui/material/Fab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import styles from '../main.module.css'
import Zoom from '@mui/material/Zoom';


export default function FloatingActionButton() {
    const [show,setShow]=React.useState(false)
    React.useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>600){
                setShow(true)
                console.log("Test")
            }
            else{
                setShow(false)
            }
        })
    },[])
  return (<>
    {show?<Box className={styles.FAB} sx={{ '& > :not(style)': { m: 1 } }} data-aos='zoom-in-up' data-aos-delay='200'>
    <Tooltip title="Go to Top" TransitionComponent={Zoom} placement='left' arrow> 
      <Fab color="secondary" aria-label="add" onClick={()=>{window.scrollTo(0,0)}}>
        <ArrowUpwardIcon />
      </Fab></Tooltip>
    </Box>:null}
    </>
  );
}
