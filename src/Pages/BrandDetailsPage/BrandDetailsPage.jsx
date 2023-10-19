import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const BrandDetailsPage = () => {
     const singleInfo = useLoaderData();
     console.log(singleInfo);
     const {
          productName,
          brandName,
          image,
          ShortDescription,
          productPrice,
          productType,
          rating,
     } = singleInfo;

     const handleAddProduct = () => {
          const productName = singleInfo.productName;
          const brandName = singleInfo.brandName;
          const image = singleInfo.image;
          const ShortDescription = singleInfo.ShortDescription;
          const productPrice = singleInfo.productPrice;
          const productType = singleInfo.productType;
          const rating = singleInfo.rating;
          const allData = {
               productName,
               brandName,
               image,
               ShortDescription,
               productPrice,
               productType,
               rating,
          };
          fetch("http://localhost:5000/addCart", {
               method: "POST",
               headers: {
                    "content-type": "application/json",
               },
               body: JSON.stringify(allData),
          })
               .then((res) => res.json())
               .then((data) => {
                    if (data.acknowledged) {
                         Swal.fire(
                              "Good job!",
                              "Product added to My cart successfully",
                              "success"
                         );
                    }
                    console.log(data);
               });
     };

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
                              <p>
                                   Description: {ShortDescription.slice(0, 80)}
                              </p>

                              <Link>
                                   <button
                                        onClick={handleAddProduct}
                                        className="btn mt-3 text-white bg-gradient-to-r from-blue-700 to-blue-900"
                                   >
                                        Add to Cart
                                   </button>
                              </Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default BrandDetailsPage;
