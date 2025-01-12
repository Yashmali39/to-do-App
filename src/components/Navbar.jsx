import React from 'react'
import { NavLink } from 'react-router-dom'
//import '/navbar.css'
const Navbar = () => {
    
  return (
    <div className='sticky top-0'>
        <ul className='flex gap-10 bg-violet-500 h-10 items-center justify-center font-bold text-white'>
            <li>
                <NavLink to='/' className={({isActive})=> isActive ? 'text-violet-900 text-xl': 'text-white hover:text-violet-900'} >Home</NavLink>
            </li>
            <li>
                <NavLink to='/pastes' className={({isActive})=> isActive ? 'text-violet-900 text-xl': 'text-white hover:text-violet-900'}>Pastes</NavLink>
            </li>
            
        </ul>
    </div>
  )
}

export default Navbar