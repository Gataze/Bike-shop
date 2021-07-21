import { FaMinus, FaPlus, FaStar } from "react-icons/fa"
import { useParams } from "react-router"
import '../styles/product-details-styles/product-details-styles.css'
import { Link } from "react-router-dom"
import useFetch from "../useFetch"


const ProductDetails = () => {


    const {typeId, id} = useParams()
    

    const {data: item, error, isPending} = useFetch(`http://localhost:8000/${typeId}/${id}` )


    return ( 

        <section className="card">
            <div className="container">
                <div className="row row-one">
                    <div className="col-1">
                        <div className="img-wrapper">
                            <div className="featured-wrapper">
                                <img src={item.url} alt="" className="featured"></img>
                            </div>
                            <div className="slider-wrapper">
                                <div className="left-arrow-container">
                                    <div className="left-arrow"></div>
                                </div>
                                
                                    <div id="slide-wrapper">
                                        
                                        {/* <img src={item.url} alt="" className="thumbnail"></img> */}
                                        
                                        
                                        {/*<img src="img/our-photos/bicycle-2.jpg" alt="" class="thumbnail">
                                        <img src="img/our-photos/bicycle-3.jpg" alt="" class="thumbnail">
                                        <img src="img/our-photos/bicycle-4.jpg" alt="" class="thumbnail">
                                        <img src="img/our-photos/bicycle-5.jpg" alt="" class="thumbnail"> */}
                                    
                                        
                                    </div>
                                    <div className="right-arrow-container">
                                        <div className="right-arrow"></div>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <h2>{item.name}</h2>
                        <div className="user-grade">
                            <div className="stars">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <span>4.8/5 (33)</span>
                        </div>
                        <p className='price'>{item.price}$</p>
                        <div className="loan">
                            <span>10 rat x {item.price/10}0$ </span>
                            <span><Link to="/">Obicz ratę</Link></span>
                        </div>
                        <p className='spcs'>Kolor<span>: Ciemna lawenda</span></p>
                        <p className='spcs'>Rozmiar<span>: Uniwersalny</span></p>
                        <div className="quantity">
                            <div className='form-wrapper'>
                                <label htmlFor="qnt">Ilość</label>
                                
                                <form>
                                    <FaMinus/>
                                    <input type="text" id='qnt' value='1'></input>
                                    <FaPlus /> 
                                </form>
                                 
                            </div>
                        </div>
                        <div className='shop-accesibility'>
                            <a href="/cart" className="btn">DODAJ DO KOSZYKA</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default ProductDetails;