import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home </Link>&nbsp;
      <Link to="/about">About Us </Link>&nbsp;
      <Link to="/form">Form </Link>&nbsp;
    </div>
  )
}

export default Navbar
