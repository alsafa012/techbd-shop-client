import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ShowBrandCards from "./ShowBrandCards";

const BrandDetails = () => {
     const [brandData, setBrandData] = useState([]);
     console.log(brandData);
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
               <div className="grid md:grid-cols-2 gap-4">
                    {brandData.map((brand) => (
                         <ShowBrandCards
                              key={brand._id}
                              brand={brand}
                         ></ShowBrandCards>
                    ))}
               </div>
          </div>
     );
};

export default BrandDetails;
