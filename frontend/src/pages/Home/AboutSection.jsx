import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../Food_Assets/assets/about/pizza.png";
import Salad from "../../Food_Assets/assets/about/salad.png";
import Delivery from "../../Food_Assets/assets/about/delivery-bike.png";

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Our signature burgers are uniquely crafted with innovative flavors that you won’t find anywhere else.
`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `We only use the freshest produce, premium meats, and handcrafted sauces to ensure every burger is a masterpiece`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Hungry now? No problem! We promise to deliver your burger in record time—just 30 minutes from our kitchen to your door.`,
  },
  // Add more mock data objects as needed
];

function Section2() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>The burger tastes better when you eat it with your family</h2>
              <p>
                Burger Mania India Pvt Limited is the master franchisee for BURGER MANIA® in India, operating BURGER MANIA® restaurants nationwide. Burger Mania India opened its first restaurant in India in 2021 and it operates more than 2 restaurants across India. The brand recently launched its own ordering Burger Mania India APP with great offers, exclusive deals and loyalty rewards to users. The company operates with multiple restaurants in Ranchi etc.
                The address of this restaurant is Saket, 3rd Floor, Harmu, Ranchi, Jharkhand.
              </p>
              <Link to="/menu" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;