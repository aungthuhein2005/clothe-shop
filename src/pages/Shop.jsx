import React from "react";
import Hero from "../Components/Heros/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewColletion from "../Components/NewCollection/NewColletion";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

const Shop = () => {
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewColletion/>
            <NewsLetter/>
        </div>
    )
}

export default Shop;