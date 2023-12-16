'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { vidGenData } from '@/api';

export default function Home() {
  const [data, setData] = useState([])

  useEffect(()=>{
    vidGenData().then((data)=> setData(data))
  },[]);

  console.log(data);

  return (
    <>
    <Navbar/>
    </>
  )
}
