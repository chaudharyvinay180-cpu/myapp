import React, { useState } from "react";
import CartProducts from "../../Assets/CartProducts";
import { useParams } from "react-router-dom";
import "./Description.css"

function Description() {
    const [activeTab, setActiveTab] = useState("description")
    let { id } = useParams()
    let CardData = CartProducts
    return (
        <>
            <div className="div">
                {CardData.map((item, i) => {
                    if (item.id == id) {
                        return (
                            <>
                                <div className="descriptionbox">
                                    <div className="description-box-nav">
                                        <div className={`description-nav ${setActiveTab === "description" ? "active" : ""
                                            }`}
                                            onClick={() => setActiveTab("description")}
                                        >
                                            Description
                                        </div>

                                        <div className={`review-nav ${setActiveTab === "review" ? "active" : ""
                                            }`}
                                            onClick={() => setActiveTab("review")}
                                        >
                                            Review (0)
                                        </div>
                                    </div>
                                    <div className="description-content">
                                        {activeTab === "description" ? (
                                            <>
                                                <h1>Product Description</h1>
                                                <p>{item.des}</p>
                                            </>
                                        ) : (
                                            <>
                                                <p>No reviews yet.</p>
                                                <div className="rating-form">
                                                    <h2>Be the first to review "Shrinay"</h2>
                                                    <p>Your email address will not be published. Required fields are marked * </p>
                                                    <h3>Your review * </h3>
                                                    <textarea className="textarea"></textarea>
                                                    <div className="review-details">
                                                        <div className="review-name">
                                                            <h4>Name *</h4>
                                                            <input className="input-name" type="text" name="" id="" />
                                                        </div>
                                                        <div className="review-name">
                                                            <h4>Email *</h4>
                                                            <input className="input-name" type="email" name="" id="" />
                                                        </div>
                                                    </div>
                                                    <button className="review-form-btn">SUBMIT</button>
                                                </div>
                                            </>
                                        )
                                        }
                                    </div>
                                </div>
                            </>
                        )
                    }
                })}
            </div>


        </>
    )

}

export default Description