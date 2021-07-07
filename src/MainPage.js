import MainMenu from "./MainMenu";
import MainSlider from "./MainSlider";
import BikeModels from "./BikeModels";
import Refs from "./Refs";
import OurPhoto from "./OurPhoto";
import { useState } from "react";
import React from "react";
import Footer from "./Footer";

const MainPage = () => {


    const [activeStyle, setActiveStyle] = useState(false)

    const handleShow = (activeStyle) => {
        setActiveStyle(!activeStyle)
    }


    return ( 
        <div className="main-page-wrapper" style={activeStyle ? {top: "260px"} : {top: "0px"}}>
            <MainMenu activeStyle={activeStyle} handleShow={handleShow}  />
            <MainSlider />
            <BikeModels />
            <Refs />
            <OurPhoto />
            <Footer />

        </div>


        
     );
}
 
export default MainPage;