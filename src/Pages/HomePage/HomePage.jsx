import Banner from "../../Components/HeaderSection/BannerSection/Banner";
import BrandCards from "../../Components/BrandCards/BrandCards";
import Footer from "../../Components/Footer/Footer";
import FirstExtraSection from "../../Components/ExtraSection/FirstExtraSection";
import SecondExtraSection from "../../Components/ExtraSection/SecondExtraSection";

const HomePage = ({ theme }) => {
     return (
          <div>
               <Banner></Banner>
               <BrandCards theme={theme}></BrandCards>
               <FirstExtraSection></FirstExtraSection>
               <SecondExtraSection></SecondExtraSection>
               <Footer></Footer>
          </div>
     );
};

export default HomePage;
