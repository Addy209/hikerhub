import React from "react";
import { Box, Typography } from "@mui/material";
import styles from '../main.module.css'
import HPCards from "./HPCards";
import useMediaQuery from '@mui/material/useMediaQuery';

const HotPlaces=()=>{
    const matches = useMediaQuery('(min-width:768px)');

    return<Box className={styles.hotPlaces}>
        <Box className={styles.Heading}>
            Hot-Places near Mumbai/Pune
        </Box>
        <Box className={styles.hpcards}>
        <HPCards img="https://ik.imagekit.io/mce8nb2epw/public/HomePage/waterfall2.jpg?updatedAt=1689099508358" animate={matches?'fade-right':null} heading="Tamini Ghat" desc={<><p>Tamhini Ghat is a mountain passage located between Mulshi and Tamhini in Maharashtra, India.</p>
            <p>Situated on the crest of the Western Ghat mountain ranges</p><p> Tamhini Ghat is noted for its surroundings comprising scenic waterfalls, lakes and dense woods.</p></>}  />
        <HPCards img="https://ik.imagekit.io/mce8nb2epw/public/HomePage/waterfall1.jpg?updatedAt=1689012380853" animate={matches?'zoom-in':null} heading="Devkund Waterfall" desc={<><p>Devkund Falls is a waterfall located near Bhira, in Maharashtra India.</p><p> It is a plunge waterfall pouring massive amounts of water on the rocky surface underneath.</p><p> It is a popular spot for one day picnics.</p></>}  />
        <HPCards img="https://ik.imagekit.io/mce8nb2epw/public/HomePage/waterfall3.jpg?updatedAt=1689099507941" animate={matches?'fade-left':null}  heading="Pavana Lake" desc={<><p>Pavana Lake is a reservoir turned artificial lake in the Indian state of Maharashtra, formed by the Pavana Dam across the Pavana River in Pune district. </p><p> The reservoir is 25 km from Lonavala and is increasingly getting popular as picnic and camping site for visitors from Pune and Mumbai.</p></>}/>
        </Box>
    </Box>
}

export default HotPlaces;

