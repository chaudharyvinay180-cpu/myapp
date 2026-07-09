import React from "react";
import "./Productdetails.css"
import { useParams } from "react-router-dom";
import Allproducts from "../../Assets/Allproducts";
import CartProducts from "../../Assets/CartProducts";
import Description from "../Description/Description";
import RelatedProducts from "../RelatedProducts/RelatedProducts";



function Productdetails() {
    let { id } = useParams()
    let CartData = CartProducts
    return (

        <>
            <div className="div">
                {CartData.map((item, i) => {
                    if (item.id == id) {
                        return (
                            <>
                                <div className="productdetails">
                                    <div className="leftproduct">
                                        <img src={item.img} alt="" width="100%" />
                                    </div>
                                    <div className="rightproduct">
                                        <p className="pro-category">Category</p>
                                        <h1 className="pro-name">{item.name}</h1>
                                        <div className="product-price">
                                            <div className="product-price-new">
                                                ${item.new_price}
                                            </div>
                                            <div className="product-price-old">
                                                ${item.old_price}
                                            </div>
                                        </div>
                                        <h2 className="productdescription">{item.description}</h2>
                                        <p className="pro-size">Select Size</p>
                                        <div className="productsize">
                                            <div>S</div>
                                            <div>M</div>
                                            <div>L</div>
                                            <div>XL</div>
                                            <div>XXL</div>
                                        </div>
                                        <button className="addtocart">ADD TO CART</button>
                                        <hr />
                                        <div className="pro-bottom">
                                            <p>100% Original product.</p>
                                            <p>Cash on delivery is available on this product.</p>
                                            <p>Easy return and exchange policy within 7 days.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pro-description">
                                    <Description></Description>
                                </div>
                                <div>
                                    <RelatedProducts></RelatedProducts>
                                </div>
                            </>
                        )

                    }

                })}
            </div>


        </>
    )
}

export default Productdetails