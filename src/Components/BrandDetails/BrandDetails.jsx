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
          <div className="container mx-auto mb-16">
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
                         {/* slider */}
                         <div className="carousel w-full">
                              <div
                                   id="slide1"
                                   className="carousel-item relative w-full"
                              >
                                   <img
                                        src="https://i.ibb.co/qNtxFt0/offer.jpg"
                                        className="w-full h-[400px] object-fill"
                                   />
                                   <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a
                                             href="#slide4"
                                             className="btn btn-circle"
                                        >
                                             ❮
                                        </a>
                                        <a
                                             href="#slide2"
                                             className="btn btn-circle"
                                        >
                                             ❯
                                        </a>
                                   </div>
                              </div>
                              <div
                                   id="slide2"
                                   className="carousel-item relative w-full"
                              >
                                   <img
                                        src="https://i.ibb.co/K7NQ9NF/1000-F-120749092-r-Lq406jk6b-Rr97-Z4-Sm-RKz-Vh-N8jma-Z1-RH.jpg"
                                        className="w-full h-[400px] object-fill"
                                   />
                                   <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a
                                             href="#slide1"
                                             className="btn btn-circle"
                                        >
                                             ❮
                                        </a>
                                        <a
                                             href="#slide3"
                                             className="btn btn-circle"
                                        >
                                             ❯
                                        </a>
                                   </div>
                              </div>
                              <div
                                   id="slide3"
                                   className="carousel-item relative w-full"
                              >
                                   <img
                                        src="https://i.ibb.co/PwJzZVj/mobile-discount.jpg"
                                        className="w-full h-[400px] object-fill"
                                   />
                                   <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a
                                             href="#slide2"
                                             className="btn btn-circle"
                                        >
                                             ❮
                                        </a>
                                        <a
                                             href="#slide4"
                                             className="btn btn-circle"
                                        >
                                             ❯
                                        </a>
                                   </div>
                              </div>
                              <div
                                   id="slide4"
                                   className="carousel-item relative w-full"
                              >
                                   <img
                                        src="https://i.ibb.co/Hp40grW/mobile-advertising.jpg"
                                        className="w-full h-[400px] object-fill"
                                   />
                                   <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a
                                             href="#slide3"
                                             className="btn btn-circle"
                                        >
                                             ❮
                                        </a>
                                        <a
                                             href="#slide1"
                                             className="btn btn-circle"
                                        >
                                             ❯
                                        </a>
                                   </div>
                              </div>
                         </div>
                         {/*  */}
                         <div className="grid md:grid-cols-2 gap-4">
                              {brandData.map((brand) => (
                                   <ShowBrandCards
                                        key={brand._id}
                                        brand={brand}
                                   ></ShowBrandCards>
                              ))}
                         </div>
                    </div>
               )}
          </div>
     );
};

export default BrandDetails;
