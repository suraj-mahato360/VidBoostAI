'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { vidGenData } from '@/api';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Features from '@/components/Features';

export default function Home() {
  const [data, setData] = useState([])

  useEffect(()=>{
    vidGenData().then((data)=> setData(data))
  },[]);

  console.log(data);

  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <Footer/>
    </>
  )
}
