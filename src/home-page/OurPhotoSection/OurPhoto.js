import useFetch from "../../hooks/useFetch";
import OurPhotoList from "./OurPhotoList";
import "./styles/our-photo.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const OurPhoto = () => {
  const {
    data: photos,
    isPending,
    error,
  } = useFetch("https://my-json-server.typicode.com/gataze/mockjson/OurPhotos");

  return (
    <div className="our-photos">
      <div className="container">
        <div className="row-header">OUR PHOTOS</div>
        <div className="row-photos">
          {isPending && <div>Loading...</div>}
          {error && <div>{error}</div>}
          {photos && <OurPhotoList photos={photos} />}
        </div>

        <div className="row-text">
          <p>
            Lorem ipsum dolor sit amet consectetur. Inventore porro quasi
            dignissimos recusandae deserunt cupiditate ab, dolore deleniti.
            Corrupti laborum eum error? Excepturi eveniet corporis rerum
            assumenda. Itaque, iure asperiores!
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPhoto;
