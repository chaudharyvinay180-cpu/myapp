import React from "react";
import "./RelatedProducts.css"
import { useParams } from "react-router-dom";
import CartProducts from "../../Assets/CartProducts";
import Item from "../Item/Item";

function RelatedProducts() {
    const { id } = useParams()
    let currentproducts = CartProducts.find(
        (item) => item.id === Number(id)
    )


    return (
        <>
            <div className="related-products">
                <h1>Related Products</h1>
                <hr />
                <div className="related-inner">
                    {CartProducts.filter(
                    (item)=>
                    
                        item.category === currentproducts.category &&
                        item.id !== currentproducts.id
                    ).slice(0,4)
                    .map((item,i)=>(
                        <Item key={i} id={item.id} name={item.name} img={item.img} new_price={item.new_price} old_price={item.old_price}></Item>
                    ))                     
                    }
                </div>
            </div>
        </>
    )
}

export default RelatedProducts