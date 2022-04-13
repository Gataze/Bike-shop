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
    <section className="photos">
      <h2 className="photos__header">OUR PHOTOS</h2>
      <div className="photos__photoList">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {photos && <OurPhotoList photos={photos} />}
      </div>
      <p className="photos__text">
        Lorem ipsum dolor sit amet consectetur. Inventore porro quasi
        dignissimos recusandae deserunt cupiditate ab, dolore deleniti. Corrupti
        laborum eum error? Excepturi eveniet corporis rerum assumenda. Itaque,
        iure asperiores! Lorem ipsum dolor sit amet consectetur. Inventore porro
        quasi dignissimos recusandae deserunt cupiditate ab, dolore deleniti.
        Corrupti laborum eum error? Excepturi eveniet corporis rerum assumenda.
        Itaque, iure asperiores!
      </p>
    </section>
  );
};

export default OurPhoto;
