import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Container,
  Header_holder,
  Footer_holder,
  main_holder,
} from "../../style/LandingPageStyle";
const LandingPage = () => {
  return (
    <Container>
      <Header_holder><Header/></Header_holder>
      <main_holder>
      
      </main_holder>

      <Footer_holder>
        <Footer />
      </Footer_holder>
    </Container>
  );
};

export default LandingPage;
