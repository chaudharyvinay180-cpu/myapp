import React from "react";
import "./Footer.css"
import logo from "../../Assets/logo.png"    
import instagram from "../../Assets/instagram.png"
import whatsapp from "../../Assets/whatsapp.png"
import facebook from "../../Assets/facebook.png"

function Footer(){

    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={logo} alt="" width="45px" />
                <p>Shrinay</p>
            </div>
            <div className="footer-link">
                <li>Locations</li>
                <li>About</li>
                <li>Contact</li>
                <li>FAQs</li>
                <li>Policies</li>
            </div>
            <div className="footer-icon">
                <img src={instagram} alt="" width="25px" />
                <img src={facebook} alt="" width="25px" />
                <img src={whatsapp} alt="" width="25px" />
                
            </div>
            <hr />

            <h3>Copyright @ 2026 - All Right Reserved</h3>
        </div>
    )
}

export default Footer