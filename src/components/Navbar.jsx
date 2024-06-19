import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className='blue-gradient_text'>NT</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-mediu'>
        <NavLink to="about" className={({ isActive }) => isActive ? 'text-blue-600 font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] hover:text-blue-400 hover:drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]' : 'text-blue-300 font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)] hover:text-blue-100 hover:drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] '}>
          About
        </NavLink>
        <NavLink to="projects" className={({ isActive }) => isActive ? 'text-blue-600 font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] hover:text-blue-400 hover:drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]' : 'text-blue-300 font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)] hover:text-blue-100 hover:drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]'}>
          Projects
        </NavLink>
        <NavLink to="contact" className={({ isActive }) => isActive ? 'text-blue-600 font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] hover:text-blue-400 hover:drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]' : 'text-blue-300 font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)] hover:text-blue-100 hover:drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]'}>
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar