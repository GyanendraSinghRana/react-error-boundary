import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex p-5 border border-solid border-slate-400'>
      <NavLink to='/' className={({isActive}) => isActive ? 'text-slate-800 mr-5' : 'hover:text-slate-800 text-slate-400 mr-5' }>Home</NavLink>
      <NavLink to='todo' className={({isActive}) => isActive ? 'text-slate-800 mr-5' : 'hover:text-slate-800 text-slate-400 mr-5' }>Todo</NavLink>
      <NavLink to='discord' className={({isActive}) => isActive ? 'text-slate-800' : 'hover:text-slate-800 text-slate-400' }>Discord</NavLink>
    </nav>
  )
}

export default Navbar;
