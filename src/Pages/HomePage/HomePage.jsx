import React from "react";
import Banner from "../../Components/HeaderSection/BannerSection/Banner";
import { useLoaderData } from "react-router-dom";
import BrandCards from "../../Components/BrandCards/BrandCards";
import Footer from "../../Components/Footer/Footer";
import FirstExtraSection from "../../Components/ExtraSection/FirstExtraSection";
import SecondExtraSection from "../../Components/ExtraSection/SecondExtraSection";

const HomePage = () => {
     const brandData = useLoaderData();
     return (
          <div>
               <Banner brandData={brandData}></Banner>
               <BrandCards></BrandCards>
               <FirstExtraSection></FirstExtraSection>
               <SecondExtraSection></SecondExtraSection>
               <Footer></Footer>
          </div>
     );
};

export default HomePage;
