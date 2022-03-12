import { useState } from "react";
import "./styles/product-description-styles/product-description-styles.css";

const ProductDescription = () => {
  const [description, setDescription] = useState(true);

  const headerActiveStyles = {
    color: "gold",
    backgroundColor: "#333",
  };

  return (
    <>
      <article className="productDescription">
        <div className="productDescription__headers">
          <h2
            className="productDescription__header"
            style={description ? headerActiveStyles : null}
            onClick={() => setDescription(true)}
          >
            Description
          </h2>
          <h2
            className="productDescription__header"
            style={description ? null : headerActiveStyles}
            onClick={() => setDescription(false)}
          >
            Specification
          </h2>
        </div>
        <div className="productDescription__text">
          {description ? (
            <span className="productDescription__textOne">
              Aenean posuere vulputate orci, et gravida dolor consectetur ut.
              Suspendisse eget accumsan dui, sed malesuada dolor. Suspendisse
              potenti. Vestibulum congue mauris tortor, id venenatis lectus
              fringilla a. Nulla aliquam consectetur leo, vel venenatis enim
              fringilla non. Nulla fermentum neque quis accumsan congue. Mauris
              condimentum, ex non molestie tempor, nisi eros posuere lacus, non
              bibendum orci nisi in nulla. Phasellus neque massa, sagittis vitae
              consequat eu, ornare eget turpis. Nulla non ipsum eu dui finibus
              luctus.
            </span>
          ) : (
            <span className="productDescription__textTwo">
              Vestibulum imperdiet mauris eget rhoncus facilisis. Suspendisse
              vitae dictum velit. Aenean rutrum convallis ipsum, id malesuada
              diam finibus sagittis. Nunc eu enim tellus. Phasellus leo ipsum,
              ullamcorper nec mollis at, ultrices et est. Mauris sit amet mattis
              neque. Praesent nec convallis sem. Pellentesque id ex malesuada
              sem dignissim iaculis in dapibus leo. Maecenas lobortis lorem
              lacus, id malesuada augue varius eget. Aliquam metus orci,
              pellentesque ut turpis et, consequat ultricies odio.
            </span>
          )}
        </div>
      </article>
    </>
  );
};

export default ProductDescription;
