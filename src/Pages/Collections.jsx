import React, { useContext } from "react";
import Item from "../Components/Item/Item";
import Allproducts from "../Assets/Allproducts";
import "./CSS/Collections.css"
import collection from "../Assets/collection.jpg"
import { ShopContext } from "../Components/Context/ShopContext";

function Collections(props) {

    const { Allproducts } = useContext(ShopContext)

    return (

        <div className="collections">
            <div className="banner">
                <img src={collection} alt="" width="100%" height="300px" />
            </div>
            <div className="collection-middle">
                <div className="collection-filter">
                    <div className="filter">
                        <p>FILTERS</p>
                       <div className="filter-category">
                         <p>CATEGORIES</p>
                        <li><input type="checkbox" name="Clothing" id="" /> <label htmlFor="">CLOTHING</label></li>
                        <li><input type="checkbox" name="Electronics" id="" /> <label htmlFor="">ELECTRONICS</label></li>
                        <li><input type="checkbox" name="Furnitures" id="" /> <label htmlFor="">FURNITURES</label></li>
                        <li><input type="checkbox" name="Sports" id="" /> <label htmlFor="">SPORTS</label></li>
                       </div>
                    </div>
                    <div className="price-range">
                        <p>PRICE RANGE</p>

                    </div>
                </div>
                <div className="collection-head">
                    <div className="collection-name">
                        <p>All COLLECTION</p>
                        <div className="sort">
                            <select name="" id="">
                                <option value="">Sort by: Relevence</option>
                                <option value="">Sort by: Low to High</option>
                                <option value="">Sort by: High to Low</option>
                            </select>

                        </div>
                    </div>
                    <div className="collection-products">
                        {Allproducts.map((item,i)=>{
                            return <Item key={i} id={item.id} name={item.name} img={item.img} new_price={item.new_price} old_price={item.old_price} />
                        })}
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Collections