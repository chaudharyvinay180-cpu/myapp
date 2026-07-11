import React from "react";
import Bestseller from "../Components/BestSeller/Bestseller";
import Cricket_Bat from "../Assets/Cricket_Bat.jpg"

function Cart(){

    return(
        <>
            <div className="Cart-outer">
                <div className="cart-best">
                    <Bestseller></Bestseller>
                </div>
                <div className="Cart-details">
                    <img src={Cricket_Bat} alt="" />
                    
                </div>
            </div>
        </>
    )
}

export default Cart