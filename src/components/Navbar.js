import React from "react";
import {Link} from "react-router-dom";


function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">VGO Traveling</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link" to='/Services'>Services</Link>
        <Link className="nav-link" to='/Gallery'>Gallery</Link>
        <Link className="nav-link" to='/Contact'>Contact Us</Link>
        <Link className="nav-link" to='/AboutUs'>AboutUs</Link>
        <Link className="nav-link" to='/Register'>Register</Link>
      <Link className="nav-link" to='/Login'>Login</Link>
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}
export default Navbar;
