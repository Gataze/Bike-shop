import MainMenu from "./MainMenu";
import MainSlider from "./MainSlider";
import BikeModels from "./BikeModels";
import Refs from "./Refs";
import OurPhoto from "./OurPhoto";
import Footer from "./Footer";
import { useState } from "react";
import React from "react";
import {Switch, Route} from 'react-router-dom'
import Cart from "./cart/Cart";
import ProductsList from "./products/ProductsList";
import ProductDetails from "./products/ProductDetails";


const MainPage = () => {


    const [activeStyle, setActiveStyle] = useState(false)



    const handleShow = (activeStyle) => {
        setActiveStyle(!activeStyle)
    }


    return ( 
        <div className="main-page-wrapper" style={activeStyle ? {top: "260px"} : {top: "0px"}}>
            <MainMenu activeStyle={activeStyle} handleShow={handleShow}  />
            <Switch>
                <Route exact path="/">
                    <MainSlider />
                    <BikeModels />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/products/:typeId/:id">
                    <ProductDetails />
                </Route>
                <Route path="/products">
                    <ProductsList />
                </Route>
                
                
            </Switch>
            
            <Refs />
            <OurPhoto />
            <Footer />
        </div>


        
     );
}
 
export default MainPage;