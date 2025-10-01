import ServicesSection from "../../components/ServicesSection";
import CarouselSection from "../../components/CarouselSection";
import { Container, Main_holder } from "../../style/LandingPageStyle";
import Faq from '../../components/Faq'
import ProductDetails from "../../components/pop/ProductDetails";

const LandingPage = ({ onLocationInputClick, onLiveLocation }) => {
  return (
    <Container>
      <Main_holder>
        <CarouselSection
          onLocationInputClick={onLocationInputClick}
          onLiveLocation={onLiveLocation}
         
        />
        <ServicesSection />
        <Faq />
        <ProductDetails/>
      </Main_holder>
    </Container>
  );
};

export default LandingPage;
