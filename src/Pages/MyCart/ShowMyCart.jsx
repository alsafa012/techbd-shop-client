import React from "react";
import { Link } from "react-router-dom";

const ShowMyCart = ({ product }) => {
     const {
          productName,
          brandName,
          image,
          ShortDescription,
          productPrice,
          productType,
          rating,
     } = product;
     return (
          <div>
               <div className=" py-5 px-3 md:flex items-center gap-5 bg-base-100 shadow-xl rounded-xl">
                    <div className="md:w-[30%]">
                         <img
                              className=" flex justify-center object-fill"
                              src={image}
                              alt="item"
                         />
                    </div>

                    <div className="md:w-[70%]">
                         <div className="text-xl font-medium space-y-2">
                              <p>Brand-Name: {brandName}</p>
                              <p>Device-Name: {productName}</p>
                              <p>Price: {productPrice}</p>
                              <p>Type: {productType}</p>
                              <p>Rating: {rating}</p>
                              {/* <p>
                                   Description: {ShortDescription.slice(0, 80)}
                              </p> */}

                              <Link>
                                   <button
                                        // onClick={handleAddProduct}
                                        className="btn mt-3 text-white bg-gradient-to-r from-blue-700 to-blue-900"
                                   >
                                        Remove product
                                   </button>
                              </Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ShowMyCart;
