import React from 'react'
import logo from '../../../assets/logo.jpeg'
import '../../styles/nav.css'

const Nav = () => {
  return (
    <div className='nav'>
        <img className='nav-logo' src={logo} alt="logo de cineverse"/>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">Series</a></li>
        </ul>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="usuario 1" className='nav-user' />

    </div>
  )
}

export default Nav