
import React from 'react'
import '../Navbar/Navbar.css';
import GAP_Image from '../Navbar/GAP_BG.png';
import { Controller } from 'react-hook-form';

const Navbar = () => {
  return (
    <>
      <div className='container'>
        <nav className="navbar navbar-light">
          <a className="navbar-brand" href="#">
            <img src={GAP_Image} height="70" alt="" />
          </a>
          <div className="d-flex justify-content-end">
            <a className="nav-link custom-nav-link " href="#">For Student</a>
            <a className="nav-link custom-nav-link dropdown-toggle " href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              For Student
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
            <a className="nav-link custom-nav-link" href="#">For Professional</a>
            <a className="nav-link custom-nav-link" href="#">About</a>
            <a className="nav-link custom-nav-link" href="#">Contact</a>
            <form className="form-inline my-2 my-lg-0">
              <button className="btn custom-button1 my-2 my-sm-3" type="submit">Login</button>
            </form>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar;