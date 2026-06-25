import React from "react";
import "./New_Arrival.css"
import Item from "../Item/Item";
import Data from "../../Assets/Data";
function New_Arrival(){

    return(
        <div className="new_arrival">
            <h1>New Arrival</h1>
            <hr/>
            <div className="new_item">
                {Data.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} img={item.img} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default New_Arrival