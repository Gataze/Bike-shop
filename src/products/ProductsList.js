import useFetch from "../useFetch";
import "../styles/products-list-styles/products-list-styles.css"
import ProductItem from "./ProductItem";
import { useState, useEffect } from "react";



const ProductsList = () => {


    const [product, setProduct] = useState("bikesPreview/")
    const {data: bikes, error, isPending} = useFetch(`http://localhost:8000/${product}`)

    const handleClick = (e) => {

        const {target: {title}} = e
        setProduct(title)
    }

    const [data, setData] = useState([])
    const [sortType, setSortType] = useState('');


    
    //gdy bikes zaladuje sie z fetch wtedy ustal data jako bikes
    //sortuj bikes gdy zmienia się wartość sortType
    useEffect(()=> {

        const sortArray = () => {
            
            //spread syntax na bikes tworzy zupełnie nową macierz objektów (klon). Brak spread
            //spowodowałby że w rzeczywistości nie powstala by kopia bikes tylko dostalibysmy ten sam obiekt
            //co uniemożliwiło by to jego edytowanie.

            //sortType.length < 6 - jeżeli vartośc value jest dłuższa od przyjętej to sortuje 
            //od 9 do 1 lub od Z do A.
            
            if(sortType.length < 6){
            
                    const sorted = [...bikes].sort((a, b) => (a[sortType.substring(0,5)] > b[sortType.substring(0,5)]) ? 1 : -1)
                    setData(sorted)
                
            }else{
                
                const sorted = [...bikes].sort((a, b) => (a[sortType.substring(0,5).trim()] > b[sortType.substring(0,5).trim()]) ? -1 : 1)
                    setData(sorted)
            }
            
        }

        sortArray()      

    },[sortType, bikes])


    
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
}
 
export default ProductsList;