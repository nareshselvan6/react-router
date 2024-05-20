import React from "react";
import { Link } from "react-router-dom";
import "../Components/NavBar.css"

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid">
  <img src="src\image\Guvi Brand Logo.png" alt="GuviBrandLogo" className='brand' />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
        <Link to='/'>All</Link>
        </li>
        <li className="nav-item">
        <Link to='/fsd'>FullStack Development</Link>
        </li>
        <li className="nav-item">
        <Link to='/ds'>DataScience</Link>
        </li>
        <li className="nav-item">
        <Link to='/cs'>CyberSecurity</Link>
        </li>
        <li className="nav-item">
        <Link to='/career'>Career</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
};

export default NavBar;
