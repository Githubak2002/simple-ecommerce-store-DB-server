import React from 'react'
import { NavLink } from 'react-router-dom'

import { useSelector } from 'react-redux';

const Nav = () => {

  const items = useSelector((state) => state.cart);

  return (
    <nav className='navBorderShadow text-purple-500 border-[#010101da41]border-b py-3 bg-gradient-to-t from-[#dadadac6] to#f1f1f1d753f'>
      <main className=' flex items-center justify-between' style={{ padding:"2px 22px", maxWidth:"1380px",margin:"2px auto",fontSize:"20px",fontWeight:600,}}>

        <a href="https://githubak2002.github.io/akportfolio" className=' text-2xl sm:text-4xl font-black '>
            AK 
        </a>
        
        <div className='flexCenter text-xl font-bold'>
            <NavLink to="/" className="py-1 hover:scale-110 transition-all ease-in hover:text-purple-700">Home</NavLink>
            
            <NavLink to="/watchList" className="flex items-center py-1 hover:scale-110 transition-all ease-in hover:text-purple-700" style={{marginLeft:"28px"}}> Watch list
            </NavLink>
            
            <NavLink to="/cart" className="flex items-center py-1 hover:scale-110 transition-all ease-in hover:text-purple-700" style={{marginLeft:"28px"}}> {items.length} 🛒
            </NavLink>
            
        </div>
        </main>
    </nav>
  )
}

export default Nav