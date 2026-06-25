import React, { useState } from "react";
import "./Offer.css"
import Home1 from "../../Assets/Home1.jpg"
import { Link } from "react-router-dom";

import Collections from "../../Pages/Collections";

function Offer(){
    const [offer, setoffer] = useState("Collections")
    return(
        <><div className="discount">
          <p onClick={()=>{setoffer("Collections")}}><Link to="/Collections"><img src={Home1} alt="" width="84%" /></Link>
          {offer==="Collection" ? <hr/>:<></>}</p>  
        </div>
        </>
    )

    
}

export default Offer