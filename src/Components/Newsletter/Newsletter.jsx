import React from "react";
import "./Newsletter.css"

function Newsletter(){
    
    return(
        <>
        <div className="newsletter">
            <h2>Get Exclusive Offer on Your Email</h2>
            <p>Subcribe to our newsletter and stay updated.</p>

            <div className="subscribe">
                <input type="email" placeholder="Enter Your Email" name="" id="" />
                <button>Subscribe</button>
            </div>
        </div>
        </>
    )

}

export default Newsletter