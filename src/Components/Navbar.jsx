import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenuAlt1 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header className='sticky top-0 z-50 bg-gray-800'>
      <div className='max-w-7xl mx-auto px-5 py-4 flex justify-between items-center'>

        <Link to='/'>
          <h1 className='text-2xl text-white font-bold'>
            Travel<span className='text-red-500'>Friend</span>
          </h1>
        </Link>

        <nav className='hidden md:flex items-center gap-8'>
          <ul className='flex items-center font-semibold text-white gap-8'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/tours'>Tours</Link></li>
            <li><Link to='/gallery'>Gallery</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>

          <button className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-semibold transition'>
            Book Now
          </button>
        </nav>

        <HiMenuAlt1
          onClick={toggleMenu}
          className='cursor-pointer md:hidden text-white'
          size={30}
        />
      </div>

      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </header>
  )
}

export default Navbar