import { Inter } from 'next/font/google'
import './globals.css'
import { Roboto } from 'next/font/google'
import StarsCanvas from '@/components/StarsBackground'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const roboto= Roboto({ subsets: ['latin'],weight:['700','400'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-black overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
