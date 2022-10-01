import "./HeroImgStyles.css";
import React from 'react';
import IntroImg from "../Img/Home_img.jpg";
import {Link} from "react-router-dom";

const HeroIMG = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>Ahoj, já jsem <span className="myName">Květoslav Přikryl</span></p>
            <h1>Fullstek Developer</h1>
            <div>
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="/contact" className="btn">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroIMG