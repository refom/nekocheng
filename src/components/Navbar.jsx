import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='flex justify-start items-start'>
        <div className='p-4 bg-slate-800 w-full'>
            <img className='aspect-auto w-[32px]' src={logo} alt="logo" />
        </div>
    </div>
  )
}

export default Navbar