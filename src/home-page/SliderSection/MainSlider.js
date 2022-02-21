import { Link } from "react-router-dom";
import "./styles/main-slider-styles.css";
import {
  FaArrowLeft,
  FaPhoneAlt,
  FaToolbox,
  FaTools,
  FaUserShield,
} from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import useFetch from "../../hooks/useFetch";

const MainSlider = () => {
  const {
    data: slides,
    isPending,
    error,
  } = useFetch("https://my-json-server.typicode.com/gataze/mockjson/sliders");

  return (
    <section className="Hero">
      <div className="Hero__container">
        <div className="Hero__slide">
          {isPending && <div>Loading</div>}
          {error && <div>{error}</div>}

          {slides && (
            <Carousel
              className="Hero__carousel"
              infiniteLoop={true}
              showThumbs={false}
              autoFocus={true}
              autoPlay={true}
              interval={5000}
              transitionTime={1000}
            >
              {slides?.map((slide) => (
                <div
                  className="Hero__carouselItem"
                  key={slide.id}
                  style={{ backgroundImage: `url(${slide.url})` }}
                ></div>
              ))}
            </Carousel>
          )}

          <div className="Hero__sliderText">
            <h2>NEW MODEL</h2>
            <p>Manticora</p>
            <Link className="Hero__sliderLink" to={`/products/bikesPreview/1`}>
              Check It Now
            </Link>
            <FaArrowLeft className="Hero__arrow" />
          </div>
        </div>

        <ul className="Hero__list">
          <li className="Hero__listItem">
            <div className="Hero__square">
              <FaUserShield />
            </div>
            <h2>Safety first</h2>
            <p>SAFETY BY DEISGN</p>
          </li>

          <li className="Hero__listItem">
            <div className="Hero__square">
              <FaPhoneAlt />
            </div>
            <h2>Support 24/7h</h2>
            <p>We support 24h a day</p>
          </li>

          <li className="Hero__listItem">
            <div className="Hero__square">
              <FaToolbox />
            </div>
            <h2>Expert service</h2>
            <p>Profesionals who know</p>
          </li>

          <div className="Hero__listItem">
            <div className="Hero__square">
              <FaTools />
            </div>
            <h2>Repair</h2>
            <p>Expert Mechanics</p>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default MainSlider;
