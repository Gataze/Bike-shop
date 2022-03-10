import "./styles/about.css";

const About = () => {
  return (
    <section className="about" name="about">
      <h1 className="about__header">About us</h1>
      <div className="about__container">
        
          <div className="about__photoContainer">
            <img className="about__photo" src={"/images/about/about-photo.jpg"} alt="about" />
          </div>
          <div className="about__textContainer">
            <h2 className="about__textHeader">Short</h2>
            <p className="about__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              quis, ullam expedita voluptatibus velit molestias officiis neque
              aut omnis debitis blanditiis animi amet possimus nihil
              consequuntur natus facilis, delectus inventore!
            </p>
          </div>
          <div className="about__textContainer">
            <h2 className="about__textHeader">Long</h2>
            <p className="about__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odit
              natus magni illo impedit. Quis quo voluptas quos, ad eligendi
              maxime nostrum earum perspiciatis. Ipsam deleniti impedit
              laudantium eos quis?
            </p>
            <p className="about__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              cupiditate eaque dolore aut illo? Quia recusandae provident fugiat
              atque, porro dolorem! Enim nostrum quo debitis officiis officia
              fugit omnis voluptatum.
            </p>
          </div>
        
          <form className="about__form">
            <h2 className="about__formHeader">Contact us</h2>
            <label className="about__label">Name*</label>
            <input className="about__input" type="text" />
            <label className="about__label">Email*</label>
            <input className="about__input" type="email" />
            <label className="about__label">Subject</label>
            <input className="about__input" type="text" />
            <label className="about__label">Message*</label>
            <textarea className="about__textarea"></textarea>
            <button className="about__button">HIGH FIVE</button>
          </form>
         
        
      </div>
    </section>
  );
};

export default About;
