  import React,{useState} from "react";
  import { Container, Row, Col } from "react-bootstrap";
  import Image1 from "../../Food_Assets/assets/menu/burger-11.jpg";
  import Image2 from "../../Food_Assets/assets/menu/burger-12.jpg";
  import Image3 from "../../Food_Assets/assets/menu/burger-13.jpg";
  import Image4 from "../../Food_Assets/assets/menu/burger-14.jpg";
  import Image5 from "../../Food_Assets/assets/menu/burger-15.jpg";
  import Image6 from "../../Food_Assets/assets/menu/burger-16.jpg";
  import Image7 from "../../Food_Assets/assets/menu/burger-17.jpg";
  import Image8 from "../../Food_Assets/assets/menu/burger-18.jpg";
  import Cards from "../../components/Layouts/Cards";
  import { Link } from "react-router-dom";

  // Mock Data Cards
  const mockData = [
    {
      id: "0001",
      image: Image1,
      title: "Crispy Chicken",
      paragraph: "Chicken breast, chilli sauce, tomatoes, pickles",
      rating: 5,
      price: 99.15,
    },
    {
      id: "0002",
      image: Image2,
      title: "Veg Burger",
      paragraph: "House patty, cheddar cheese, onion, mustard",
      rating: 4.5,
      price: 99.99,
    },
    {
      id: "0003",
      image: Image3,
      title: "Chicken Egg Cripsy Burger",
      paragraph: "cheese, tomato, avocado, lettuce, red onion",
      rating: 4,
      price: 110.99,
    },
    {
      id: "0004",
      image: Image4,
      title: "Vegan Burger",
      paragraph: "House patty, cheddar cheese, onion, mustard",
      rating: 3.5,
      price: 99.99,
    },
    {
      id: "0005",
      image: Image5,
      title: "Double Burger",
      paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
      rating: 3.0,
      price: 59.99,
    },
    {
      id: "0006",
      image: Image6,
      title: "King Burger",
      paragraph: "Double cheddar cheese, onion, lettuce, tomatoes, pickles",
      rating: 3,
      price: 79.99,
    },
    {
      id: "0007",
      image: Image7,
      title: "Smokey House",
      paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
      rating: 2.5,
      price: 109.99,
    },
    {
      id: "0008",
      image: Image8,
      title: "Classic Burger",
      paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
      rating: 2.0,
      price: 89.00,
    },
    // Add more mock data objects as needed
  ];

  // Rating Logical Data
  const renderRatingIcons = (rating) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (rating > 0.5) {
        stars.push(<i key={i} className="bi bi-star-fill"></i>);
        rating--;
      } else if (rating > 0 && rating < 1) {
        stars.push(<i key={"half"} className="bi bi-star-half"></i>);
        rating--;
      } else {
        stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
      }
    }
    return stars;
  };

  function Section3() {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
      const itemInCart = cartItems.find((item) => item.id === product.id);
      if (itemInCart) {
          setCartItems(
              cartItems.map((item) =>
                  item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                    )
          );
      } else {
          setCartItems([...cartItems, { ...product, quantity: 1 }]);
      }
  };

    return (
        <section className="menu_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
              <h2>OUR CRAZY BURGERS</h2>
              <p className="para">
              Get ready to experience burgers like never before! Our crazy burger creations are packed with bold flavors, stacked high with fresh ingredients, and crafted to satisfy your wildest cravings. Each one is a delicious adventure, with unique combinations that push the boundaries of what a burger can be. Whether you love spicy, cheesy, or loaded with toppings, we've got something special for you!
              </p>
            </Col>
          </Row>
          <Row>
            {mockData.map((cardData, index) => (
              <Cards
                key={index}
                image={cardData.image}
                rating={cardData.rating}
                title={cardData.title}
                paragraph={cardData.paragraph}
                price={cardData.price}
                renderRatingIcons={renderRatingIcons}
                addToCart={()=>addToCart(cardData)}
              />
            ))}
          </Row>

          <Row className="pt-5">
            <Col sm={6} lg={5}>
              <div className="ads_box ads_img1 mb-5 mb-md-0">
                <h4 className="mb-0">GET YOUR FREE</h4>
                <h5>CHEESE FRIES</h5>
                <Link to="/" className="btn btn_red px-4 rounded-1">
                  Learn More
                </Link>
              </div>
            </Col>
            <Col sm={6} lg={7}>
              <div className="ads_box ads_img2">
                <h4 className="mb-0">GET YOUR FREE</h4>
                <h5>Veg Cheese Burger</h5>
                <Link to="/" className="btn btn_red px-4 rounded-1">
                  Learn More
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
    );
  }

  export default Section3;