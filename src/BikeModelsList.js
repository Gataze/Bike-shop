import { useState } from 'react'
import './styles/bike-models-list/Bike-models-list.css'
import { Link } from 'react-router-dom'

const BikeModelsList = (data) => {


    const [product] = useState("bikesPreview/")
    

    return ( 
        <div className="bike-models-list">
            {data.data.map(item => (
                <div className="col" key={item.id}>
                    <img src={item.url} alt="img"/>
                    <div className="description">
                        <h2>{item.name}</h2>
                        <span>{item.body}</span>
                        
                            <Link to={`/products/${product + item.id}`}>View more</Link>
                       
                        
                    </div>
                </div>
            ))}
        </div>
        
     );
}
 
export default BikeModelsList;