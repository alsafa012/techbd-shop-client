import Banner from "../../Components/HeaderSection/BannerSection/Banner";
import BrandCards from "../../Components/BrandCards/BrandCards";
import Footer from "../../Components/Footer/Footer";
import FirstExtraSection from "../../Components/ExtraSection/FirstExtraSection";
import SecondExtraSection from "../../Components/ExtraSection/SecondExtraSection";
// import CountSection from "../../Components/ExtraSection/CountSection";

const HomePage = () => {
     return (
          <div>
               <Banner></Banner>
               <BrandCards></BrandCards>
               <FirstExtraSection></FirstExtraSection>
               {/* <CountSection></CountSection> */}
               <SecondExtraSection></SecondExtraSection>
               <Footer></Footer>
          </div>
     );
};

export default HomePage;
