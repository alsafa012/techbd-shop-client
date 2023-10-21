import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import ShowBrands from "./ShowBrands";
import { theamToggleContext } from "../../Root/Root";

const BrandCards = () => {
     const theam = useContext(theamToggleContext);

     const branCards = useLoaderData();
     // console.log(branCards);
     return (
          <div className="container mx-auto mb-10">
               <div>
                    {/* <p className="w-[40%] my-8 font-bold p-5 text-xl md:text-3xl lg:text-4xl bg-blue-400 text-center mx-auto rounded-full">Choose Your Brand</p> */}
                    {/* <h2 className={theam ==='light' ? "text-2xl text-blue-400 text-center underline md:text-4xl font-bold py-8" : "text-2xl text-center md:text-4xl text-white font-bold py-8" }>
                         Choose Your Brand
                    </h2> */}
                    <h2 className="text-2xl p-4 text-blue-400 text-center underline md:text-4xl font-bold ">
                         Choose Your Brand
                    </h2>
                    {/* <h2 className="text-2xl text-center md:text-4xl font-semibold py-8">
                        { handleDark ? "okk" : 'Choose Your Brand'}
                    </h2> */}
                    {/* <h2 className={handleDark?"bg-green-400":"text-2xl bg-red-500 text-center md:text-4xl font-semibold py-8"}>
                         Choose Your Brand
                    </h2> */}
                    {/* <h2 className="text-2xl text-blue-700 text-center md:text-4xl font-semibold py-8">
                         Choose Your Brand
                    </h2> */}
                    {/* {handleDark
                         ?
                         <h2 className="text-2xl bg-red-500 text-center md:text-4xl font-semibold py-8">
                              Choose Your Brand
                         </h2>
                         :
                         <h2 className="text-2xl text-center md:text-4xl font-semibold py-8">
                              Choose Your Brand
                         </h2>
                     } */}
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
