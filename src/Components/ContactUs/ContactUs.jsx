import React from "react";
import "./ContactUs.css"
import contactus from "../../Assets/contactus.jpg"

function ContactUs() {

    return (

        <>
            <div className="contactus">
                <h1>Contact Us</h1>
            </div>

            <div className="contact-help">
                <h4>Have any queries?</h4>
                <h2>We're here to help.</h2>
                <div className="query-box">
                    <div className="query-box-card">
                        <h3>Sales</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptas!</p>
                        <span>100-000-0000</span>
                    </div>


                    <div className="query-box-card">
                        <h3>Complaints</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptas!</p>
                        <span>101-000-1100</span>
                    </div>


                    <div className="query-box-card">
                        <h3>Return</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptas!</p>
                        <span>Return@mail.con</span>

                    </div>

                    <div className="query-box-card">
                        <h3>Marketing</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptas!</p>
                        <span>111-222-0000</span>
                    </div>
                </div>
            </div>

            <div className="contact-tellus">
                <div className="contact-stranger">
                    <p>Dont be a Stranger!</p>
                    <h2>Tell us your thoughts.</h2>
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error dolorum eaque earum? Blanditiis deleniti in eius quo reiciendis sed laudantium.</span>
                </div>
                <div className="contact-form">
                    <input type="text" name="" id="" placeholder="NAME *" />
                    <input type="text" name="" id="" placeholder="SUBJECT *" />
                    <input type="email" name="" id="" placeholder="EMAIL *" />
                    <textarea placeholder="MESSAGE"></textarea>
                    <button>SEND MESSAGE</button>
                </div>
            </div>
        </>
    )
}

export default ContactUs