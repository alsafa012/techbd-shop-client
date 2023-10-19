import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ShowMyCart = ({ product,addProduct,setAddProduct }) => {
     const handleRemoveProduct = (id)=>{
          fetch(
               `http://localhost:5000/addCart/${id}`,
               {
                    method: "DELETE",
               }
          )
               .then((res) => res.json())
               .then((data) => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                         const remainingUser = addProduct.filter(
                              (item) => item._id !== id
                         );
                         setAddProduct(remainingUser);
                         Swal.fire(
                              "Deleted!",
                              "User has been delete successfully",
                              "success"
                         );
                    }
               });
     }
     const {
          _id,
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
                                        onClick={()=>handleRemoveProduct(_id)}
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
