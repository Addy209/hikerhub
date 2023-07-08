import React from 'react'
import { Box } from '@mui/material'
import styles from './main.module.css'
import Link from 'next/link'

const MenuItems=[{title:"Home",link:"/"}, {title:"About Us",link:"about"},{title:"Why us?",link:"whyus"},{title:"Feedback",link:"feedback"}]

const Header=()=>{
    const [currentMenu,setCurrentMenu]=React.useState(0);
    

    return <Box className={styles.HeroHeader}>
    <Box className={styles.logo}>
        <img src='https://ik.imagekit.io/mce8nb2epw/public/HomePage/HeroSVG.png?updatedAt=1688844374563' />
    </Box>
     <Box className={styles.Menu}>
    <Box className={styles.MenuItems}>
        {MenuItems.map((menu,index)=>{
            return<Box onClick={()=>setCurrentMenu(index)} key={index} className={currentMenu===index? `${styles.active} ${styles.MenuItem}`:`${styles.MenuItem}`}>
                <Link href={menu.link}>{menu.title}</Link>
                </Box> 
        })}
    </Box>
    <Box className={styles.HBtn}>
        <Box className={styles.LoginBtn}>Login</Box>
    </Box>
    </Box> 
</Box>

}
export default Header