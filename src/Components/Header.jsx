import React from 'react'
import '../styles/Header.css'
const Header = () => {
  return (
<>
<header id="header" className="fixed-top ">
  <div className="container d-flex align-items-center justify-content-lg-between">
    <h1 className="logo me-auto me-lg-0"><a href="#hero"><span>Goldiam.</span></a></h1>
    <nav id="navbar" className="navbar order-last order-lg-0">
      <ul>
        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
        <li><a className="nav-link scrollto" href="#about">About</a></li>
        <li><a className="nav-link scrollto" href="#miners">Miners</a></li>
        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>
    <a href="#about" className="get-started-btn scrollto">Get Started</a>
  </div>
</header>

</>
  )
}

export default Header