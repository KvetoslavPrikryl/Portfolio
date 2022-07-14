import "./HeroImg2Styles.css";
import React from 'react';
import IntoImg2 from "../Img/Home_img2.jpg";
import Hero_img from "../Img/Hero_img.jpg";

const HeroImg2 = () => {
  return (
    <div className="hero">
        <div className="into-img">
            <img className="into-img" src={IntoImg2} alt="IntroImg"/>
        </div>
        <div className="heading">
            <div className="card">
                <img className="hero_img" src={Hero_img} alt="Hero_img"/>
                <p className="hero_text">
                    Jmenuji se Květoslav Přikryl. Programování se věnuji cca 2 roky převážně pogramování v Pythonu. Chodil jsem 8 měsíců do ItStep academie na kurz programování v pythonu.
                    
                </p>
            </div>
            
        </div>
    </div>
  );
};

export default HeroImg2