import React from "react";
import "./Fiftyoff.css"
import Item from "../Item/Item";
import Fifty from "../../Assets/Fifty";

function Fiftyoff(){

    return(
        <div className="fiftyoff">
            <h1>50% Off On Selected Items</h1>
            <hr />
            <div className="off">
                {Fifty.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} img={item.img} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default Fiftyoff