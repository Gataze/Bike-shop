import './../styles/bike-models-styles/bike-models-styles.css'
import useFetch from "../hooks/useFetch"
import BikeModelsList from "./BikeModelsList"


const BikeModels = () => {

    const {data, error, isPending} = useFetch('https://my-json-server.typicode.com/gataze/mockjson/bikesPreview')
    
    

    return ( 
        <div className="bike-models">
            <div className="container">
                <h2>NEW MODELS</h2>
                <div className="row">
                    {isPending && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                    {data && <BikeModelsList data={data}/>}

                </div>
            </div>

        </div>
     );
}
 
export default BikeModels;