import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../Food_Assets/assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
                A great burger is more than just a meal—it's an experience that brings friends, family, and food lovers together. At Your Burger Brand, we believe every bite should be an unforgettable journey of flavor. Our burgers are crafted with love and precision, using only the finest ingredients. From the first taste of our soft buns and juicy patties to the crisp freshness of the toppings, every element is designed to elevate your dining experience. We're not just about taste—we're about making memories, one burger at a time.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;