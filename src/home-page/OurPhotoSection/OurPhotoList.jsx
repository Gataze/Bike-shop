import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./styles/our-photo.css";

const OurPhotoList = ({ photos }) => {
  
  return (
    <div className="ourPhotos" >
      {photos.map((photo) => (
        <div className="ourPhotos__container" key={photo.id}>
          <div className="ourPhotos__overlay" >
              <h2 className="ourPhotos__overlayHeader">LOREMBIKES</h2>
              <p className="ourPhotos__overlayText">Not just another bike shop</p>
              <div className="ourPhotos__overlaySocial">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
              </div>
              <span className="ourPhotos__carouselEntry">
                Show photos
              </span>
          </div>
          <img className="ourPhotos__image"src={photo.url} alt={photo.name} />
        </div>
      ))}
    </div>
  );
};

export default OurPhotoList;
