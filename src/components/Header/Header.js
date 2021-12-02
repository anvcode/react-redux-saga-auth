import React from 'react'
import Navbar from './Navbar/Navbar'

const Header = (props) => {
  return (
    <header className='row'>
      <Navbar props={props}/>
    </header>
  )
}

export default Header
