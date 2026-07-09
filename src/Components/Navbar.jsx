import React, { useState } from "react";
import "./Navbar.css"
import logo from "../Assets/logo.png"
import trolley from "../Assets/trolley.png"
import admin from "../Assets/admin.png"
import { Link, NavLink } from "react-router-dom";


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
                    <li onClick={()=>{setMenu("Home")}}> <NavLink to="/Home" >Home</NavLink> {menu==="Home" ? <hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("Collections")}}><NavLink to="/Collections" >Collections</NavLink>{menu==="Collections" ? <hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("Locations")}}><NavLink to="/Locations" >Locations</NavLink>{menu==="Locations" ? <hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("About")}}><NavLink to="/About" >About</NavLink>{menu==="About" ? <hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("Contact")}}><NavLink to="/Contact" >Contact</NavLink>{menu==="Contact" ? <hr/>:<></>}</li>
                </ul>
                <div className="nav-login-cart">
                <Link to="/Login" ><img src={admin} alt="" width="30px" /></Link>
                <Link to="/Login" > <button>Log In</button></Link> 
                <Link to="/Cart" ><img src={trolley} alt="" width="30px"/></Link>    
                <div className="nav-cart-count">
                    <Link to="/Cart">0</Link> 
                </div>

                </div>
            </div>
        </>
    )
}

export default Navbar