import React from "react";
import { useLoaderData } from "react-router-dom";
import ShowBrands from "./ShowBrands";

const BrandCards = () => {
     const branCards = useLoaderData();
     // console.log(branCards);
     return (
          <div className="container mx-auto mb-10">
               <h2 className="text-2xl md:text-4xl font-semibold text-left py-8">
                    Feature Cards
               </h2>
               <div className="grid md:grid-cols-3 gap-5  ">
                    {branCards.map((brand) => (
                         <ShowBrands key={brand._id} brand={brand}></ShowBrands>
                    ))}
               </div>
          </div>
     );
};

export default BrandCards;