import { Box, Typography } from '@mui/material'
import React from 'react'
import Hero from './hero'
import Features from './Features/features'
import FloatingActionButton from './Features/FAB'
import HotPlaces from './HotPlaces/hotplaces'

const Home=(props)=>{
return<>
<Hero />
<Features />
<HotPlaces/>
<Box sx={{height:"100vh"}}>hi</Box>



</>
}

export default Home