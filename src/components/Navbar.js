import "./NavbarStyle.css";
import React, {useState}from 'react';
import {Link} from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 70){
      setColor(true);
    }else{
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className= {click ? "nav-menu active": "nav-menu"}>
          <li>
            <Link to="/">Domu</Link>
          </li>
          <li>
            <Link to="/about">O mně</Link>
          </li>
          <li>
            <Link to="/projects">Projekty</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (<FaTimes size={20} style={{color:"white"}} />):(<FaBars size={20} style={{color:"white"}} />)}
        </div>
    </div>
  );
};

export default Navbar;