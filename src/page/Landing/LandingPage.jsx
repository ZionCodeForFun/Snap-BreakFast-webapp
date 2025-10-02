import ServicesSection from "../../components/ServicesSection";
import CarouselSection from "../../components/CarouselSection";
import { Container, Main_holder } from "../../style/LandingPageStyle";
import ProductDetails from "../../components/pop/ProductDetails";
import FreqentFAQ from "../../components/FreqentFAQ";


const LandingPage = ({ onLocationInputClick, onLiveLocation }) => {
  return (
    <Container>
      <Main_holder>
        <CarouselSection
          onLocationInputClick={onLocationInputClick}
          onLiveLocation={onLiveLocation}
        />
        <ServicesSection />

        <FreqentFAQ />
        <ProductDetails />
      </Main_holder>
    </Container>
  );
};

export default LandingPage;
