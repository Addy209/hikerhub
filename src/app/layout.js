"use client"

import {Header, Headernavigation, LogoHeader} from '@/Components/Header/header'
import './globals.css'
import { Inter } from 'next/font/google'
import useMediaQuery from '@mui/material/useMediaQuery';
import Provider from './Provider';


const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  
  const matches = useMediaQuery('(min-width:768px)');
  return (
    <html lang="en">
      <body className={inter.className} >
       <Provider>
        {matches?<Header />:<Headernavigation />}
        {matches?null:<LogoHeader />}
        {children}
        </Provider>
        </body>
    </html>
  )
}
