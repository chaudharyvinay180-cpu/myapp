import React from "react";
import "./AboutPage.css"
import About from "../../Assets/About.jpeg"
import who from "../../Assets/who.jpg"
import Vinay from "../../Assets/Vinay.png"
import Shristy from "../../Assets/Shristy.avif"
import Thomas from "../../Assets/Thomas.jpg"
import Tyrion from "../../Assets/Tyrion.png"
import Ned from "../../Assets/Ned.jpg"
import Jon from "../../Assets/Jon.jpg"
import payment from "../../Assets/payment.webp"
import quality from "../../Assets/quality.webp"
import offer from "../../Assets/offer.jpg"
import shipping from "../../Assets/shipping.webp"



function AboutPage() {

    return (
        <>
            <div className="about-us">
                <h1>About Us</h1>

            </div>

            <div className="who">
                <div className="who-we-are">
                    <hr />
                    <h2>Who We Are</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente molestiae hic voluptatum alias fugiat consequatur officia accusamus quibusdam dicta molestias, iusto blanditiis quidem laudantium tenetur magni accusantium vel corporis inventore.</p>
                </div>
                <div className="who-we-are-img">
                    <img src={who} alt="" width="100%" />
                </div>
            </div>

            <div className="our-team">
                <div className="about-team">
                    <hr />
                <h4>A Few Words About</h4>
                <h3>Our Team</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates tempora illum tenetur velit repudiandae assumenda fuga dolores labore expedita nostrum aut eum, animi dolorum, officia quae libero culpa quidem?</p>
                </div>
                <div className="team">
                    <div className="team-card1">
                        <div className="team-card">
                            <div className="team-card-img">
                                <img src={Vinay} alt="" width="100%" />
                            </div>
                            <p>Vinay Chaudhary</p>
                            <span>Founder - CEO</span>
                        </div>
                        <div className="team-card">
                            <div className="team-card-img">
                                <img src={Shristy} alt="" width="100%" />
                            </div>
                            <p>Shristy Devrani</p>
                            <span>COO</span>
                        </div>
                        <div className="team-card">
                            <div className="team-card-img">
                                <img src={Jon} alt="" width="100%" />
                            </div>
                            <p>Jon Snow</p>
                            <span>Marketing Head</span>
                        </div>
                    </div>
                    <div className="team-card2">
                        <div className="team-card">
                            <div className="team-card-img">
                                <img src={Thomas} alt="" width="100%" />
                            </div>
                            <p>Thomas Shelby</p>
                            <span>Lead Developer</span>
                        </div>
                        <div className="team-card">
                            <div className="team-card-img">
                                <img src={Tyrion} alt="" width="100%" />
                            </div>
                            <p>Tyrion Lannister</p>
                            <span>Stretegic Manager</span>
                        </div>
                        <div className="team-card">
                            <div className="team-card-img">
                                <img src={Ned} alt="" width="100%" />
                            </div>
                            <p>Ned Stark</p>
                            <span>Operations Head</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="benefit">
                <div className="benefit-card">
                    <div className="benefit-card-img">
                        <img src={shipping} alt="" />
                    </div>
                    <h2>Worldwide Shipping</h2>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className="benefit-card">
                    <div className="benefit-card-img">
                        <img src={quality} alt="" />
                    </div>
                    <h2>Best Quality</h2>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className="benefit-card">
                    <div className="benefit-card-img">
                        <img src={offer} alt="" />
                    </div>
                    <h2>Best Offers</h2>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className="benefit-card">
                    <div className="benefit-card-img">
                        <img src={payment} alt="" />
                    </div>
                    <h2>Secure Payment</h2>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>

        </>
    )
}

export default AboutPage