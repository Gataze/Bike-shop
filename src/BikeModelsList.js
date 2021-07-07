import './styles/bike-models-list/Bike-models-list.css'

const BikeModelsList = (data) => {

    return ( 
        <div className="bike-models-list">
            {data.data.map(item => (
                <div className="col" key={item.id}>
                    <img src={item.url} alt="img"/>
                    <div className="description">
                        <h2>{item.name}</h2>
                        <span>{item.body}</span>
                        <button>View more</button>
                    </div>
                </div>
            ))}
        </div>
        
     );
}
 
export default BikeModelsList;