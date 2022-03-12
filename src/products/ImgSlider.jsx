import { useState } from "react";

const ImgSlider = ({ item }) => {
  const [active, setActive] = useState(true);

  return (
    <div className="card__imagesContainer">
        <img src={item.url} alt={`${item.name} one`} className={`card__images ${active? "card__images--active" : "card__images--inActive"}`} />
        <img src={item.url2} alt={`${item.name} two`} className={`card__images ${active? "card__images--inActive" : "card__images--active" }`} />
      <div className="card__imagesContainer-min">
        <img
          onClick={() => setActive(true)}
          src={item.url}
          alt={`${item.name} min`}
          className="card__images-min"
        />
        <img
          onClick={() => setActive(false)}
          src={item.url2}
          alt={`${item.name} min`}
          className="card__images-min"
        />
      </div>
    </div>
  );
};

export default ImgSlider;
