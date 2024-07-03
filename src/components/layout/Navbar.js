import React from 'react'
import { logo } from '../../assets'

const Navbar = () => {
  return (
    <header className='flex items-center p-6 pl-20'>
      <img src={logo} />
      <span>Authentication</span>
    </header>
  )
}

export default Navbar