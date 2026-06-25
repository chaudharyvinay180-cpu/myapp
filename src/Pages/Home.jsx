import React from "react";
import Offer from "../Components/Offer/Offer";
import New_Arrival from "../Components/New_Arrival/New_Arrival";
import Newsletter from "../Components/Newsletter/Newsletter";
import Fiftyoff from "../Components/Fiftyoff/Fiftyoff";

function Home(){

    return(
        <>
        <Offer></Offer>
        <New_Arrival></New_Arrival>
        <Fiftyoff></Fiftyoff>
        <Newsletter></Newsletter>
        </>
    )
}

export default Home