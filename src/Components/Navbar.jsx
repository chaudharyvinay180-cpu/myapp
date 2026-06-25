import React, { useState } from "react";
import "./Navbar.css"
import logo from "../Assets/logo.png"
import trolley from "../Assets/trolley.png"
import admin from "../Assets/admin.png"
import { Link } from "react-router-dom";


function Navbar(){

    const [menu, setMenu] = useState("Home")
    return(
        <>
            <div className="navbar">
                <div className="nav-logo" >
                    <a href="/Home"><img src={logo} alt="" width="65px"/></a>
                    <a href="/Home"><p>Shrinay</p></a>
                </div>

                <ul className="nav-menu">
                    <li onClick={()=>{setMenu("Home")}}> <Link to="/Home" >Home</Link> {menu==="Home" ? <hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("Collections")}}><Link to="/Collections" >Collections</Link>{menu==="Collections" ? <hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("Locations")}}><Link to="/Locations" >Locations</Link>{menu==="Locations" ? <hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("About")}}><Link to="/About" >About</Link>{menu==="About" ? <hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("Contact")}}><Link to="/Contact" >Contact</Link>{menu==="Contact" ? <hr/>:<></>}</li>
                </ul>
                <div className="nav-login-cart">
                <img src={admin} alt="" width="30px" />
                <Link to="/Login" > <button>Log In</button></Link> 
                <Link to="/Cart" ><img src={trolley} alt="" width="30px"/></Link>    
                <div className="nav-cart-count">
                    0
                </div>

                </div>
            </div>
        </>
    )
}

export default Navbar