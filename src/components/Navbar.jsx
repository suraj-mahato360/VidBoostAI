import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-black p-4">
    <ul className="flex">
      <li className="mr-4">
        <Link href="/home">
          <p className="text-white font-bold">Home</p>
        </Link>
      </li>
      <li className="mr-4">
        <Link href="/features">
          <p className="text-white font-bold">Features</p>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <p className="text-white font-bold">Blog</p>
        </Link>
      </li>
      <li>
        <Link href="/pricing">
          <p className="text-white font-bold">Pricing</p>
        </Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar