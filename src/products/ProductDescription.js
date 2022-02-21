import { useState } from "react";
import "./styles/product-description-styles/product-description-styles.css";

const ProductDescription = () => {
  const activeStyles = {
    color: "gold",
    background: "rgba(0, 0, 0, 0.808)",
  };
  const [activeDescription, setActiveDescription] = useState({
    display: "block",
  });
  const [activeSpecification, setActiveSpecification] = useState({
    display: "none",
  });
  const [active, setActive] = useState(false);

  //activates card with description
  const handleDescription = () => {
    setActiveDescription({ display: "block" });
    setActiveSpecification({ display: "none" });
    setActive((prevState) => {
      return !prevState;
    });
  };

  //activates card with specifications
  const handleSpecification = () => {
    setActiveDescription({ display: "none" });
    setActiveSpecification({ display: "block" });
    setActive((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      <div className="row-1">
        <div className="container">
          <div className="col">
            <p
              className="description-header"
              style={!active ? activeStyles : null}
              onClick={handleDescription}
            >
              Description
            </p>
            <p
              className="specification-header"
              style={active ? activeStyles : null}
              onClick={handleSpecification}
            >
              Specification
            </p>
          </div>
        </div>
      </div>
      <div className="row-2">
        <div className="container">
          <div className="col">
            <div className="description" style={activeDescription}>
              <h2>Description</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium quos inventore deserunt illum sint dolores.
                Accusamus voluptatum, libero expedita repellat, porro impedit
                est officia cumque laudantium similique beatae provident.
                Perferendis! Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Quod iusto consectetur excepturi, recusandae incidunt
                sequi velit quis reiciendis ullam, fuga natus facilis quia
                possimus harum nobis dignissimos! Facere, placeat repellat.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                amet, est commodi harum id neque cumque repellat aliquam quos
                quasi incidunt error nobis rem aspernatur rerum nihil magni
                perspiciatis unde!
              </p>
            </div>
            <div className="specification" style={activeSpecification}>
              <h2>Specification</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                repellat pariatur facilis delectus, soluta optio? Tenetur
                provident vitae pariatur earum quae. Impedit deserunt ipsa optio
                quae tempore vel repellat porro. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Excepturi maiores, nulla,
                repellat, ducimus praesentium hic tempore cumque quaerat porro
                nam debitis quasi! Dolorum sapiente commodi ipsam earum officiis
                aliquid voluptas? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quibusdam totam esse labore repudiandae
                deserunt dolores ipsa explicabo eligendi. Laboriosam, placeat.
                Quod minima eligendi repudiandae iusto vitae maiores beatae
                architecto dignissimos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
