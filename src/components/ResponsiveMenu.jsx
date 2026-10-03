import React from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { FaUserCircle } from 'react-icons/fa'

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? 'right-0' : '-right-full'
      } fixed top-0 bottom-0 z-50 flex h-screen w-[75%] flex-col justify-between bg-white px-8 pb-6 pt-16 text-black transition-all duration-300 md:hidden rounded-r-xl shadow-md`}
    >
      <div>
        <button
          onClick={() => setShowMenu(false)}
          className='border border-black rounded-lg absolute top-4 right-6 p-1' onClick={()=>setShow(Menufalse)}
        >
          <X />
        </button>

        <div className='flex items-center gap-3'>
          <FaUserCircle size={50} />
          <div>
            <h1>Hello user</h1>
            <p className='text-sm text-slate-500'>Premium user</p>
          </div>
        </div>
      </div>

      <nav className='mt-12'>
        <ul className='space-y-4 text-xl'>
          <li><Link onClick={() => setShowMenu(false)} to='/'>Home</Link></li>
          <li><Link onClick={() => setShowMenu(false)} to='/about'>About Us</Link></li>
          <li><Link onClick={() => setShowMenu(false)} to='/tours'>Tours</Link></li>
          <li><Link onClick={() => setShowMenu(false)} to='/gallery'>Gallery</Link></li>
          <li><Link onClick={() => setShowMenu(false)} to='/contact'>Contact</Link></li>
        </ul>

        <button
          onClick={() => setShowMenu(false)}
          className='mt-6 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-semibold transition'
        >
          Book Now
        </button>
      </nav>
    </div>
  )
}

export default ResponsiveMenu