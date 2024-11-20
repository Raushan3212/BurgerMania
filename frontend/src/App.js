import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Section2 from "./pages/Home/AboutSection";
import Section3 from "./pages/Home/MenuSection";
import Section5 from "./pages/Home/ShopSection";
import Section6 from "./pages/Home/BlogSection";
import Section7 from "./pages/Home/ContactSection";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import Cart from "./pages/Home/Cart";

function App() {

  return (
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<Section2/>}/>
      <Route path="/menu" element={<Section3/>}/>
      <Route path="/shop" element={<Section5/>}/>
      <Route path="/blog" element={<Section6/>}/>
      <Route path="/contact" element={<Section7/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
