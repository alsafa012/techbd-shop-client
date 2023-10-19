import React from 'react';
import Banner from '../../Components/HeaderSection/BannerSection/Banner';
import { useLoaderData } from 'react-router-dom';
import BrandCards from '../../Components/BrandCards/BrandCards';
import Footer from '../../Components/Footer/Footer';

const HomePage = () => {
     const brandData = useLoaderData()
     return (
          <div>

               <Banner brandData={brandData}></Banner>

               <BrandCards></BrandCards>
               
               <Footer></Footer>

          </div>
     );
};

export default HomePage;