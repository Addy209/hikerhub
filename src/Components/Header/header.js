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
import {signIn,signOut,useSession} from 'next-auth/react'

const MenuItems=[{title:"Home",link:"/"}, {title:"About Us",link:"/about"},{title:"Why us?",link:"/whyus"},{title:"Feedback",link:"feedback"}]
const LOGIN_URL='/user/login'

export const LogoHeader=()=>{
    return <Box className={styles.centerLogo}>
        <img src='https://ik.imagekit.io/mce8nb2epw/public/HomePage/logo_mobile.jpg?updatedAt=1688923759816' id="logoImage" draggable={false}/>
    </Box>
    
}

export const Header=()=>{
    const {data:session}=useSession()
    const [currentMenu,setCurrentMenu]=React.useState(0);
    const router=useRouter()
    const [bgColor,setbgColor]=React.useState(null)
    React.useEffect(()=>{
        if(currentMenu!==0){
            setbgColor("#f0f0f0")
        }
        else{
            setbgColor(null)
        }
    },[currentMenu])
    console.log(currentMenu, bgColor)
    return <Box className={styles.HeroHeader} sx={{backgroundColor:bgColor}}>
    <Box className={styles.logo}>
        <img src='https://ik.imagekit.io/mce8nb2epw/public/HomePage/HeroSVG.png?updatedAt=1688844374563' draggable={false}  />
    </Box>
     <Box className={styles.Menu}>
    <Box className={styles.MenuItems}>
        {MenuItems.map((menu,index)=>{
            return<Box onClick={()=>{
                        router.push(menu.link)
                        setCurrentMenu(index)            }} 
                                    key={index} className={currentMenu===index? `${styles.active} ${styles.MenuItem}`:`${styles.MenuItem}`} >
                {menu.title}
                </Box> 
        })}
    </Box>
    {session?.user?<>{session.user.email}<Box className={styles.HBtn}>
        <Box className={styles.LoginBtn}onClick={()=>{
            signOut()
            setCurrentMenu(0)
        }}>Logout</Box>
    </Box></>:<Box className={styles.HBtn}>
        <Box className={styles.LoginBtn}onClick={()=>{
            signIn()
            // router.push(LOGIN_URL)
            setCurrentMenu('login')
        }}>Login</Box>
    </Box>}
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
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex:10 }} elevation={10}>
        <BottomNavigation
          showLabels
          value={currentMenu}
          onChange={handleChange}
        >
          <BottomNavigationAction label="Home" icon={<HomeTwoToneIcon sx={{color:'brown', fontSize:'2rem'}} />} onClick={()=>router.push(MenuItems[0].link)} />
          <BottomNavigationAction label="About" icon={<InfoTwoToneIcon sx={{color:'skyblue', fontSize:'2rem'}}  />} onClick={()=>router.push(MenuItems[1].link)} />
          <BottomNavigationAction label="Why Us?" icon={<ContactSupportTwoToneIcon sx={{color:'green', fontSize:'2rem'}} />} onClick={()=>router.push(MenuItems[2].link)} />
          <BottomNavigationAction label="Feedback" icon={<ChatTwoToneIcon sx={{color:'mediumturquoise', fontSize:'2rem'}} />} onClick={()=>router.push(MenuItems[3].link)} />
        </BottomNavigation>
      </Paper>
    );
  }
  