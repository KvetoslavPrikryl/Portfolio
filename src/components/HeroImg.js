import "./HeroImgStyles.css";
import React from 'react';
import IntroImg from "../Img/Home_img.jpg"
import {Link} from "react-router-dom";

const HeroIMG = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>Hi, I am Květoslav Přikryl</p>
            <h1>Fullstek Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroIMG