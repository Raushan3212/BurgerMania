import React from "react";
import Layout from "../../components/Layouts/Layout";
import "../../styles/HomeStyle.css";
import Section1 from "./Section1";
import Section2 from "./AboutSection";
import Section3 from "./MenuSection";
import Section4 from "./PromotionSection";
import Section5 from "./ShopSection";
import Section6 from "./BlogSection";
import Section7 from "./ContactSection";

const Home = () => {
  return (
    <>
      <Layout>
        {/* Home Section Hero Banner */}
        <Section1 />

        {/* Home Section About */}
        <Section2 />

        {/* Home Section Menu */}
        <Section3 />

        {/* Home Section Promotion */}
        <Section4 />

        {/* Home Section Shop */}
        <Section5 />

        {/* Home Section Blog */}
        <Section6 />

        {/* Home Section Contact */}
        <Section7 />
      </Layout>
    </>
  );
};

export default Home;