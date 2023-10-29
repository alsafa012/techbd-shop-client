import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import ShowBrands from "./ShowBrands";

const BrandCards = () => {
     const branCards = useLoaderData();
     // console.log(branCards);
     return (
          <div className="container mx-auto mb-10">
               <div>
                    <h2 className="text-2xl p-4 text-blue-400 text-center underline md:text-4xl font-bold ">
                         Choose Your Brand
                    </h2>
               </div>
               <div className="grid md:grid-cols-3 gap-5">
                    {branCards.map((brand) => (
                         <ShowBrands key={brand._id} brand={brand}></ShowBrands>
                    ))}
               </div>
          </div>
     );
};

export default BrandCards;
