import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css"
import useToken from "../../useToken";
const Nav = () =>{

  const { token, setToken } = useToken();
  const Logout = ( ) => {
    
   return setToken('');
  }
    return (<nav className="Nav">
    <div className="Nav-container">
      

  
        <ul className="Nav-item-wrapper">
       <li className="Nav-brand-item"> 
        <Link to="/" className="Nav-brand">
       MyPortfolio
      </Link>
      </li>
          <li className="Nav-item">
            <Link className="Nav-link" to="/">Home</Link>
          </li>
          <li className="Nav-item">
            <Link className="Nav-link" to="/profile">Profile</Link>
          </li>
          <li className="Nav-item">
            <Link className="Nav-link" to="/templates">Templates</Link>
          </li>
          <li className="button">  <Link to="/"><button onClick={Logout}className="logoutBtn">Logout</button></Link></li>
        </ul>
   
    </div>
  </nav>)
}
export default Nav;