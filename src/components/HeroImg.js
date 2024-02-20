import "./HeroImgStyles.css";
import React from 'react';
import IntroImg from "../Img/Home_img.jpg";
import {Link} from "react-router-dom";

const HeroIMG = () => {
  return (
    <section className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <article className="content">
            <p>Ahoj, jmenuji se <span className="myName">Slávek Přikryl</span></p>
            <h1>Fullstek Developer</h1>
            <div className="buttons-section">
                <Link to="/projects" className="btn">Projekty</Link>
                <Link to="/contact" className="btn">Kontakt</Link>
            </div>
        </article>
    </section>
  )
}

export default HeroIMG