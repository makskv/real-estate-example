import React from 'react'
import './Header.css'
import { ReactComponent as Logo } from 'assets/logo.svg'

const Header = () => {
  return (
    <nav className="nav">
      <Logo />
      <button className="nav__button">Log in</button>
    </nav>
  )
}

export default Header
