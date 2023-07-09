"use client"

import {Header, Headernavigation, LogoHeader} from '@/Components/Header/header'
import './globals.css'
import { Inter } from 'next/font/google'
import useMediaQuery from '@mui/material/useMediaQuery';


const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  const matches = useMediaQuery('(min-width:768px)');
  return (
    <html lang="en">
      <body className={inter.className} >
        {matches?<Header />:<Headernavigation />}
        {matches?null:<LogoHeader />}
        {children}</body>
    </html>
  )
}
