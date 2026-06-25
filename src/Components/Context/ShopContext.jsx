import React, {createContext} from "react";
import Allproducts from "../../Assets/Allproducts";

export const ShopContext = createContext(null)

const ShopContextProvier = (props) =>{
    const contextValue = {Allproducts}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvier