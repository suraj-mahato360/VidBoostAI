import React from 'react'
import Link from 'next/link'
import Pricing from './Pricing'

const Navbar = () => {
  return (
    <nav className="bg-black p-4 text-[2rem] flex justify-center mt-14 relative z-20">
    <ul className="flex">
      <li className="mr-4 ">
        <Link href={"/"}>
          <p className="text-white font-medium mx-5 ">Home</p>
        </Link>
      </li>
      <li className="mr-4">
        <Link href="#features">
          <p className="text-white font-medium mx-5 ">Features</p>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <p className="text-white font-medium mx-5 ">Blog</p>
        </Link>
      </li>
      <li>
        <Link href="#pricing">
          <p className="text-white font-medium mx-5 ">Pricing</p>
        </Link>
      </li>
    </ul>
    
  </nav>
  )
}

export default Navbar