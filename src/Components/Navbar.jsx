import React from 'react'
import './Navbar.css'
import logo from './../logo.png'
import logo1 from './../logodark.png'

function Navbar(props) {
  return (
    <nav className='navbar' data-theme = {props.theme}>
      <div className="nav-logo">
       <img src = {`${props.theme=== 'light'? logo : logo1}`} alt="" className="logo" />
        <h1>AGE<span id = {`${props.theme === 'light' ? 'nav-logo-span':'nav-logo-span1'}`}>CALC</span></h1>
      </div>

      {/* <div className="nav-links-container">
      <ul className="nav-links">
      <li><a href="#"></a>Home</li>
        <li><a href="#"></a>About</li>
        
      </ul>
      </div> */}

      <div className="nav-mode-button">
        <i class="fa-solid fa-moon" onClick={props.toggleTheme}></i>
      </div>
    </nav>
  )
}

export default Navbar
