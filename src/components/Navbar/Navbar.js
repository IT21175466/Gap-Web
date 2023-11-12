
import React from 'react'
import '../Navbar/Navbar.css';

const Navbar=()=>{
    return(
        <>
        <div className='custom-containe'>
        <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
        <a className="navbar-brand custom-Logo-link" href="#">Logo</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link custom-nav-link" href="#">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle custom-nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                For Student
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle custom-nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                For Professional
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#">About</a>
            </li><li className="nav-item">
              <a className="nav-link custom-nav-link" href="#">Contact</a>
            </li>
          </ul>
          <button class="btn custom-button my-2 my-sm-3 " type="submit">Login</button>
        </div>
      </nav></div></div></>
    )
}

export default Navbar;