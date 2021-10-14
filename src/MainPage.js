import MainMenu from "./menu/MainMenu";
import MainSlider from "./home/MainSlider";
import BikeModels from "./home/BikeModels";
import Refs from "./home/Refs";
import OurPhoto from "./home/OurPhoto";
import Footer from "./home/Footer";
import { useState } from "react";
import React from "react";
import {Switch, Route} from 'react-router-dom'
import Cart from "./cart/Cart";
import ProductsList from "./products/ProductsList";
import ProductDetails from "./products/ProductDetails";
import About from "./about/About"
import LoginPage from "./user/LoginPage";
import SignupPage from './user/SignupPage'
import ForgotPass from "./user/ForgotPass";

const MainPage = () => {

    const [activeStyle, setActiveStyle] = useState(false);
    const handleShow = (activeStyle) => {
        setActiveStyle(!activeStyle)
    }

    return ( 
        <div className="main-page-wrapper" style={activeStyle ? {top: "260px"} : {top: "0px"}}> 
            <MainMenu activeStyle={activeStyle} handleShow={handleShow}/>
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
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/signup">
                    <SignupPage />
                </Route>
                <Route path="/remind">
                    <ForgotPass />
                </Route> 
            </Switch>
            <Refs />
            <OurPhoto />
            <Footer />
        </div>   
     );
};
 
export default MainPage;
