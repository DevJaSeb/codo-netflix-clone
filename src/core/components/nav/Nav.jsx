import React from 'react'
import logo from '../../../assets/logo.jpeg'
import '../../styles/nav.css'
import { useAuth } from '../../auth/hook/useAuth'

const Nav = () => {

  const{logout, toggleConfig, showConfig} = useAuth();
  return (
    <div className='nav'>
        <img className='nav-logo' src={logo} alt="logo de cineverse"/>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">Series</a></li>
        </ul>
        <div className='nav-item' onClick={toggleConfig}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="usuario 1" className='nav-user' />
          <p>User 1</p>         
        </div> 
        <div className={showConfig?'nav-dropdown-active':'nav-dropdown'}>
            <ul className='nav-dropdown-list'>
              <li>Cosa 1</li>
              <li>Cosa 2</li>
              <li>Cosa 3</li>
              <li onClick={logout}>Cerrar sesion</li>
            </ul>
          </div>

    </div>
  )
}

export default Nav