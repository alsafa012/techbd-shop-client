import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import ShowBrandCards from "./ShowBrandCards";

const BrandDetails = () => {
     const [brandData, setBrandData] = useState([]);
     // console.log(brandData);
     const products = useLoaderData();
     // console.log(products)
     const { brandName } = useParams();
     useEffect(() => {
          const remainingData = products.filter(
               (item) => item.brandName === brandName
          );
          setBrandData(remainingData);
          // console.log(remainingData)
     }, [brandName, products]);
     return (
          <div className="container mx-auto mt-8 mb-16">
               {brandData.length === 0 ? (
                    <div className="text-center mx-auto text-xl md:text-3xl font-bold mt-20 space-y-2">
                         <h1>Oops...!</h1>
                         <h3>No Product Available In this Brand.</h3>
                         <Link to={"/"}>
                              <button className="btn mt-2 bg-gradient-to-r from-blue-700 to-blue-400 text-white border-none">
                                   Click Here for Home Page..
                              </button>
                         </Link>
                    </div>
               ) : (
                    <div className="grid md:grid-cols-2 gap-4">
                         {brandData.map((brand) => (
                              <ShowBrandCards
                                   key={brand._id}
                                   brand={brand}
                              ></ShowBrandCards>
                         ))}
                    </div>
               )}
          </div>
     );
};

export default BrandDetails;
