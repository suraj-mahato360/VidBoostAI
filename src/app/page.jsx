'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { vidGenData } from '@/api';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import StarsCanvas from '@/components/StarsCanvas';

export default function Home() {
  const [data, setData] = useState([])

  useEffect(()=>{
    vidGenData().then((data)=> setData(data))
  },[]);

  console.log(data);

  return (
    <>
    <StarsCanvas/>

    <Navbar/>
    <Hero/>
    <Features/>
    <Pricing/>
    <Footer/>
    </>
  )
}
