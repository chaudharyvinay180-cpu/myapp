import React from "react";
import "./CSS/Login.css"

function Login(){

    return(
        <>
            <div className="login">
                <div className="login-container">
                    <h1>Sign Up</h1>
                    <div className="login-field">
                        <input type="text" name="" placeholder="Your Name" id="" />
                        <input type="email" name="" placeholder="Email Address" id="" />
                        <input type="password" name="" placeholder="Password" id="" />
                    </div>
                    <button>Continue</button>
                    <p className="login-signup">
                        Already have an account ? <span>Login here</span>
                    </p>
                    <div className="login-term">
                        <input type="checkbox" name="" id="" />
                        <p>By Continuing, I agree to the Terms of Use & Privacy Policy.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login