import "./FooterStyles.css"
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";

import React from 'react'

const Footer = () => {
  return (
    <section className="footer">
        <div className="footer-container">
            <div className="footer-cont">
                <article className="location">
                    <FaHome size={20} style={{ color:"white", marginRight:"2rem"}}/>
                    <div>
                        <p>Zápy 235</p>
                        <p>25061 Zápy</p>
                    </div>
                </article>
                <article className="phone">
                    <h4>
                       <FaPhone size={20} style={{ color:"white", marginRight:"2rem"}}/> 
                       721 328 540
                    </h4>
                    <h4>
                       <FaMailBulk size={20} style={{ color:"white", marginRight:"2rem"}}/> 
                       Kvetoslav.Prikryl1991@gmail.com
                    </h4>
                </article>
            </div>
        </div>
    </section>
  )
}

export default Footer