import { useState } from "react";

const ImgSlider = ({ item }) => {
  const [imageOne, setImageOne] = useState(true);

  return (
    <div className="card__imagesContainer">
      {imageOne ? (
        <img src={item.url} alt={item.name} className="card__images" />
      ) : (
        <img src={item.url2} alt={item.name} className="card__images" />
      )}
      <div className="card__imagesContainer-min">
        <img
          onClick={() => setImageOne(true)}
          src={item.url}
          alt={item.name}
          className="card__images-min"
        />
        <img
          onClick={() => setImageOne(false)}
          src={item.url2}
          alt={item.name}
          className="card__images-min"
        />
      </div>
    </div>
  );
};

export default ImgSlider;
