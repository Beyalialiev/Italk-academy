import React from 'react'
import "./Navbar.css"
import { AiOutlineBars } from "react-icons/ai";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="https://italk.az/wp-content/uploads/2021/09/143x43.png" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <AiOutlineBars />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <a className="nav-link" href="#">Ana səhifə</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Haqqımızda</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Müəllimlərimiz</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sual&Cavab</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Əlaqə</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar