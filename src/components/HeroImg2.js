import "./HeroImg2Styles.css";
import React from 'react';
import IntoImg2 from "../Img/Home_img2.jpg";
import Hero_img from "../Img/Hero_img.jpg";

const HeroImg2 = () => {
  return (
    <section className="hero">
        <div className="into-img">
            <img className="into-img" src={IntoImg2} alt="In_to_img"/>
        </div>
        <div className="heading">
            <article className="card">
                <img className="hero_img" src={Hero_img} alt="Hero_img"/>
                <p className="hero_text">
                    Jmenuji se Slávek Přikryl. Programování můj koníček. Programuji vždy, když mám trochu času po dobu cca 4let. Nejdříve jsem se začal učit HTML a CSS, pak jsem se zaměřil na Python. Absolvoval jsem kurz Programování v Pythonu na StepIt akademii a automatizovaného testování v Pythonu na BeeIt akademii. Teď programuji jednoduché aplikace v pythonu. Tvořím také webové stránky pomocí PHP, jQuery a React. 
                </p>
            </article>
            
        </div>
    </section>
  );
};

export default HeroImg2