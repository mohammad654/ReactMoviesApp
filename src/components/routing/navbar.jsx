import React from 'react'
import { NavLink,Link } from 'react-router-dom';
import Logo from "../routing/logo192.png";

const NavBar = () => {
    return ( <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/movies">
      <img src={Logo} alt="Logo"/>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/movies">Movies</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/customers">   Customers</NavLink>
          </li>
   
        </ul>
      </div>
    </div>
  </nav> );
}
 
export default NavBar;