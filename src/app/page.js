'use client'
import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Home from '../Components/Home/index'
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function Homepage() {

  React.useEffect(()=>{
    AOS.init({
        duration:1000,
        once:true
    })
  },[])
  
console.log(process.env.AES_KEY)
  return (
   <>
   <Home />
   </>
  )
}
