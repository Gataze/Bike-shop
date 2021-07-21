import useFetch from "../useFetch";
import "../styles/products-list-styles/products-list-styles.css"
import ProductItem from "./ProductItem";
import { useState } from "react";



const ProductsList = () => {


    

    const [product, setProduct] = useState("bikesPreview/")
    const {data: bikes, error, isPending} = useFetch(`http://localhost:8000/${product}`)


    const handleClick = (e) => {

        const {target: {title}} = e
        setProduct(title)
    }


    return ( 
            <div className="products">
            
                <div className="row-1">
                    <div className="col-1">
                        <h2>All Products</h2>
                        <p>Products: 189</p>
                    </div>

                    <div className="col-2">
                        <span title="bikesPreview/" onClick={(e) => handleClick(e)}>Bikes</span>
                        <span title="accesories/" onClick={(e) => handleClick(e)}>Accesories</span>
                    </div>

                </div>
                <div className="row-2">
                    <div className="container">
                        {isPending && <div>Loading...</div>}
                        {error && <div>{error}</div>}
                        {bikes && <ProductItem product={product} bikes={bikes} />}
                    </div>
                </div>    
            </div>  
            
        
     );
}
 
export default ProductsList;