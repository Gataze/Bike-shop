
import "./styles/our-photo/our-photo.css"

const OurPhotoList = ({photos}) => {
    return ( 
        <>
        {photos.map((photo) => (
            <div className="photo-grid-item" key={photo.id}>
                <img src={photo.url} alt="#" />
            </div>
        ))}
        </>
     );
}
 
export default OurPhotoList;