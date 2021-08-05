
import { Link } from "react-router-dom";


const ProductItem = ({bikes, product}) => {

   

    return ( 
    <>
    {bikes.map(bike => (

        <div className="product-item" key={bike.id}>
            <div className="col-3">
                <h2>{bike.name}</h2>
                <div className="photo">
                    <img src={bike.url} alt="manticora"></img>
                </div>
                <div className="description">
                    <div className="price">
                        <span>Price:</span>
                        <span><b> {bike.price}$</b></span>
                    </div>
                    <div>
                        <span>Number of gears <b>27</b></span> 
                    </div>
                    <div>
                        <span>Wheel size <b>26"</b></span>
                    </div>
                    <div>
                        <span>Frame size <b>18"</b></span>
                    </div>
                    <div>
                        <span>Frame type <b>male</b></span>
                    </div>
                    <button>
                        <Link className="btn" to={`/products/${product + bike.id}`}>SEE MORE</Link>
                    </button>
                </div>
            </div>
        </div>
    ))}      
    </>
    );
}
 
export default ProductItem;