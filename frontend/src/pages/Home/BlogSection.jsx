import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";
// import User1 from "../../Food_Assets/assets/blog/review-author-1.jpg";
// import User2 from "../../Food_Assets/assets/blog/review-author-2.jpg";
// import User3 from "../../Food_Assets/assets/blog/review-author-3.jpg";
// import User4 from "../../Food_Assets/assets/blog/review-author-5.jpg";

function Section6() {
  return (
      <section className="blog_section">
      <Container>
        <Row>
          <Carousel>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                </div>
                <p>
                "Juicy and Flavorful!"
                  " I can't get enough of the burgers here! The patty is so juicy and full of flavor, and the toppings are always fresh. The sauce has just the right kick, and everything comes together perfectly. Definitely my go-to spot for a quick and delicious meal! "
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY ARYAN KASHYAP</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                </div>
                <p>
                "Fast Delivery and Great Taste!" " I ordered a burger for delivery, and it arrived super fast, still hot and fresh. The bun was soft, the cheese melted perfectly, and the burger had that amazing char-grilled flavor. This place nails both quality and speed! "
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY ADITYA RAJ</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                </div>
                <p>
                "Unique and Delicious!" " The burgers at Your Burger Brand are unlike anything I've had before. They've got some really creative combinations that totally work! I tried the burger with avocado and spicy mayo, and it was incredible. It's so refreshing to have something different and so well-made! "
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY RAHUL RAJ</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                </div>
                <p>
                "Perfectly Cooked Every Time!" " I've ordered from here a few times, and every time, the burger is cooked to perfection—juicy, flavorful, and never dry. The portion sizes are generous, and the fries are crispy too. I just wish they had a few more sauce options! "
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY ASHISH SHARMA</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </section>
  );
}

export default Section6;