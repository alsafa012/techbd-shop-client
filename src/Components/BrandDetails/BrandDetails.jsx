import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import ShowBrandCards from "./ShowBrandCards";
import Marquee from "react-fast-marquee";
import Footer from "../Footer/Footer";

const BrandDetails = () => {
     const [brandData, setBrandData] = useState([]);
     console.log("all brans", brandData);
     const products = useLoaderData();
     // console.log(products)
     const { brandName } = useParams();
     useEffect(() => {
          const remainingData = products.filter(
               (item) => item.brandName === brandName
          );
          setBrandData(remainingData);
          console.log("remaining", remainingData);
     }, [brandName, products]);
     return (
          <div className="container mx-auto">
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
                    <div>
                         <div className="p-3 rounded-md bg-[#F3F3F3]">
                              <div className="flex">
                                   <Marquee pauseOnHover={true} speed={40}>
                                        <img
                                             className="w-[200px] md:w-[500px] h-[40vh] object-fill"
                                             src="https://i.ibb.co/whvs7qw/Samsung-Galaxy-Social-Media-Banner-Design-scaled.jpg"
                                             alt=""
                                        />
                                        <img
                                             className="w-[200px] md:w-[500px] h-[40vh] object-fill"
                                             src="https://i.ibb.co/9ZzLzM6/091323-i-Phone-15-Coming-soon-banner.webp"
                                             alt=""
                                        />
                                        <img
                                             className="w-[200px] md:w-[500px] h-[40vh] object-fill"
                                             src="https://i.ibb.co/kJycWtD/60707622-456218378466582-1149532822654943232-n.webp"
                                             alt=""
                                        />
                                   </Marquee>
                              </div>
                         </div>
                         {/*  */}
                         <div className="grid md:grid-cols-2 gap-4 my-5">
                              {brandData.map((brand) => (
                                   <ShowBrandCards
                                        key={brand._id}
                                        brand={brand}
                                   ></ShowBrandCards>
                              ))}
                         </div>
                    </div>
               )}
               <Footer></Footer>
          </div>
     );
};

export default BrandDetails;
