import React, { useState } from "react";
import { Link } from "react-router-dom";

// const ShowBrandCards = ({brandData}) => {
const ShowBrandCards = ({ brand }) => {
     // const [shortData,setShortData]=useState(40)
     const {
          _id,
          productName,
          brandName,
          image,
          ShortDescription,
          productPrice,
          productType,
          rating,
     } = brand;
     // console.log(brandData)
     return (
          <div>
               <div className=" py-5 px-3 flex gap-5 bg-base-100 shadow-xl rounded-xl">
                    <div className="w-[30%]">
                         <img className=" object-fill" src={image} alt="item" />
                    </div>

                    <div className="w-[70%]">
                         <div className="text-xl font-medium space-y-2">
                              <p>Brand-Name: {brandName}</p>
                              <p>Device-Name: {productName}</p>
                              <p>Price: {productPrice}</p>
                              <p>Type: {productType}</p>
                              <p>Rating: {rating}</p>
                              {/* <p>Description: { ShortDescription.slice(0,80)}</p> */}

                              {ShortDescription.length > 20 && (
                                   <p>
                                        Description:{" "}
                                        {ShortDescription.slice(0, 80)} .....
                                   </p>
                              )}
                              <Link to={`/details/${_id}`}>
                                   <button className="btn text-white bg-gradient-to-r from-blue-700 to-blue-900">Details</button>
                              </Link>
                              <Link to={`/updateProduct/${_id}`}><button className="btn ml-5 text-white bg-gradient-to-r from-blue-700 to-blue-900">Update Here</button></Link>
                         </div>
                         {/* <div className="card-actions justify-end">
                              <div className="btn-group btn-group-vertical space-y-2 mr-4">
                                   <Link to={`/details/${_id}`}>
                                        <button className="btn">View</button>
                                   </Link>
                                   <Link to={`/updateCoffee/${_id}`}>
                                        <button className="btn">Edit</button>
                                   </Link>
                                   <button
                                        // onClick={() => handleDelete(_id)}
                                        className="btn"
                                   >
                                        x
                                   </button>
                              </div>
                         </div> */}
                    </div>
               </div>
          </div>
     );
};

export default ShowBrandCards;
