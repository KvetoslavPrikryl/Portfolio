import "./FooterStyles.css"
import { FaFacebook, FaHome, FaMailBulk, FaPhone } from "react-icons/fa";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="cont-left">
                <div className="location">
                    <FaHome size={20} style={{ color:"white", marginRight:"2rem"}}/>
                    <div>
                        <p>Zápy 235</p>
                        <p>25061 Zápy</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                       <FaPhone size={20} style={{ color:"white", marginRight:"2rem"}}/> 
                       721 328 540
                    </h4>
                    <h4>
                       <FaMailBulk size={20} style={{ color:"white", marginRight:"2rem"}}/> 
                       Kvetoslav.Prikryl1991@gmail.com
                    </h4>
                </div>
            </div>
            <div className="cont-right">
                <h4>
                    <FaFacebook size={30} style={{ color:"white", marginRight:"1rem"}}/> 
                </h4>
            </div>
        </div>
    </div>
  )
}

export default Footer