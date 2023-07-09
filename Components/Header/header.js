import React from 'react'
import { Box, Paper } from '@mui/material'
import styles from './main.module.css'
import Link from 'next/link'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import ContactSupportTwoToneIcon from '@mui/icons-material/ContactSupportTwoTone';
import ChatTwoToneIcon from '@mui/icons-material/ChatTwoTone';
import { useRouter } from 'next/navigation';

const MenuItems=[{title:"Home",link:"/"}, {title:"About Us",link:"about"},{title:"Why us?",link:"whyus"},{title:"Feedback",link:"feedback"}]

export const LogoHeader=()=>{
    return <Box className={styles.centerLogo}>
        <img src='https://ik.imagekit.io/mce8nb2epw/public/HomePage/logo_mobile.jpg?updatedAt=1688923759816' id="logoImage"/>
    </Box>
    
}

export const Header=()=>{
    const [currentMenu,setCurrentMenu]=React.useState(0);
    
    return <Box className={styles.HeroHeader}>
    <Box className={styles.logo}>
        <img src='https://ik.imagekit.io/mce8nb2epw/public/HomePage/HeroSVG.png?updatedAt=1688844374563'  />
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


export const Headernavigation=(props)=> {
    const [currentMenu,setCurrentMenu]=React.useState(0);
    const router=useRouter()
  
    const handleChange = (event, newValue) => {
        setCurrentMenu(newValue);
    };
  
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={10}>
        <BottomNavigation
          showLabels
          value={currentMenu}
          onChange={handleChange}
        >
          <BottomNavigationAction label="Home" icon={<HomeTwoToneIcon sx={{color:'brown', fontSize:'2rem'}} />} onClick={()=>router.push(MenuItems[0].link)} />
          <BottomNavigationAction label="About" icon={<InfoTwoToneIcon sx={{color:'skyblue', fontSize:'2rem'}}  />} onClick={()=>router.push(MenuItems[1].link)} />
          <BottomNavigationAction label="Archive" icon={<ContactSupportTwoToneIcon sx={{color:'green', fontSize:'2rem'}} />} onClick={()=>router.push(MenuItems[2].link)} />
          <BottomNavigationAction label="Archive" icon={<ChatTwoToneIcon sx={{color:'mediumturquoise', fontSize:'2rem'}} />} onClick={()=>router.push(MenuItems[3].link)} />
        </BottomNavigation>
      </Paper>
    );
  }
  