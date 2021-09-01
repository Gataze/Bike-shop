import './styles/about/about.css'


const About = () => {
    
    
    
    return ( 
        <div className="about">
            <h1>About us</h1>
            <div className="container">
            <div className="row">
                <div className="col col-1">
                    <img src={'/images/about/about-photo.jpg'} alt="about" />
                
                </div>
                <div className="col col-2">
                    <h2>Short</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quis, ullam expedita voluptatibus velit molestias officiis neque aut omnis debitis blanditiis animi amet possimus nihil consequuntur natus facilis, delectus inventore!</p>
                </div>
                <div className="col col-3">
                    <h2>Long</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odit natus magni illo impedit. Quis quo voluptas quos, ad eligendi maxime nostrum earum perspiciatis. Ipsam deleniti impedit laudantium eos quis?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cupiditate eaque dolore aut illo? Quia recusandae provident fugiat atque, porro dolorem! Enim nostrum quo debitis officiis officia fugit omnis voluptatum.</p>
                </div>
                <div className="col col-4">
                    
                    <form className='contact-form'>
                        <h2>Contact us</h2>
                        <label>Name*</label>
                        <input type="text" />
                        <label>Email*</label>
                        <input type="email" />
                        <label>Subject</label>
                        <input type="text" />
                        <label>Message*</label>
                        <textarea></textarea>
                        <button>
                            HIGH FIVE
                        </button>
                    </form>
                </div>
            </div>
            </div>
           
        </div>
     );
}
 
export default About;