import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import StoreIOS from "../../Food_Assets/assets/shop/appstore.png";
import StoreGoogle from "../../Food_Assets/assets/shop/googleplay.png";
import DownloadImage from "../../Food_Assets/assets/shop/e-shop.png";

function Section5() {
  return (
    <><section className="shop_section">
    <Container>
      <Row className="align-items-center">
        <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
          <h4>Download mobile App and</h4>
          <h2>save up to 20%</h2>
          <p>
          Enjoy exclusive deals and faster ordering with our mobile app.
         Download today and get up to 20% off your first order! Simple, convenient, and designed to make your burger cravings just a tap away.
          </p>
          <Link to="/">
            <img
              src={StoreIOS}
              alt="IOS"
              className="img-fluid store me-3"
            />
          </Link>
          <Link to="/">
            <img
              src={StoreGoogle}
              alt="Android"
              className="img-fluid store me-3"
            />
          </Link>
        </Col>
        <Col lg={6}>
          <img src={DownloadImage} alt="e-shop" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  </section>
  </> 
  );
}

export default Section5;