import useFetch from "../hooks/useFetch";
import "../styles/products-list-styles/products-list-styles.css"
import ProductItem from "./ProductItem";
import { useState, useEffect } from "react";

const ProductsList = () => {
    const [product, setProduct] = useState("bikesPreview/")
    const {data: bikes, error, isPending} = useFetch(`https://my-json-server.typicode.com/gataze/mockjson/${product}`)

    const handleClick = (e) => {
        const {target: {title}} = e
        setProduct(title)
    };

    const [data, setData] = useState([])
    const [sortType, setSortType] = useState('');
    
    //Fetch bikes list from server
    //Sort items when sortType is changed
    useEffect(()=> {

        const sortArray = () => {
            //'Spread' creates completely new array -> list of objects with our data with bikes. Without spread it would be impossible
            //to sort the objects in array as we can't sort original object. 
     
            
            //sortType.length < 6 - If length of sortType is longer than 6 sort the array.
            //From 9 to 0 or from Z to A
            if(sortType.length < 6){
            
                    const sorted = [...bikes].sort((a, b) => (a[sortType.substring(0,5)] > b[sortType.substring(0,5)]) ? 1 : -1)
                    setData(sorted)
                
            }else{
                
                const sorted = [...bikes].sort((a, b) => (a[sortType.substring(0,5).trim()] > b[sortType.substring(0,5).trim()]) ? -1 : 1)
                    setData(sorted)
            }
            
        }

        sortArray()      

    },[sortType, bikes]);
    
    return ( 
            <div className="products">   
                <div className="row-1">
                    <div className="col-1">
                        <h2>All Products</h2>
                    </div>

                    <div className="col-2">
                        <span title="bikesPreview/" onClick={(e) => handleClick(e)}>Bikes</span>
                        <span title="accesories/" onClick={(e) => handleClick(e)}>Accesories</span>
                    </div>
                    <div className="col-2">
                        <select defaultValue="" onChange={(e) => setSortType(e.target.value) }>
                            <option value="" disabled hidden>Sort items by: </option>
                            <option value="name">Name (A...Z)</option>
                            <option value="name long">Name (Z...A)</option>
                            <option value="price">Price (1...9)</option>
                            <option value="price long">Price (9...1)</option>
                        </select>    
                    </div>
                </div>
                <div className="row-2">
                    <div className="container">
                        {isPending && <div>Loading...</div>}
                        {error && <div>{error}</div>}
                        {data && <ProductItem product={product} bikes={data} />}  
                    </div>
                </div>    
            </div>       
     );
};
 
export default ProductsList;
