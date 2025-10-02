import ServicesSection from "../../components/ServicesSection";
import CarouselSection from "../../components/CarouselSection";
import { Container, Main_holder } from "../../style/LandingPageStyle";
import ProductDetails from "../../components/pop/ProductDetails";
import FreqentFAQ from "../../components/FreqentFAQ";
import InputAddress from '../../components/pop/InputAddress'; 

const LandingPage = ({ onLocationInputClick, onLiveLocation }) => {
  return (
    <Container>
      <Main_holder>
        <CarouselSection
          onLocationInputClick={onLocationInputClick}
          onLiveLocation={onLiveLocation}
        />
        <ServicesSection />
        <InputAddress />
        <FreqentFAQ />
        <ProductDetails />
      </Main_holder>
    </Container>
  );
};

export default LandingPage;
