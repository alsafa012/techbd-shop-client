import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
     const product = useLoaderData();
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
     const handleUpdateProduct = (e) => {
          e.preventDefault();

          const form = e.target;
          const image = form.image.value;
          const productName = form.productName.value;
          const brandName = form.brandName.value;
          const productType = form.productType.value;
          const productPrice = form.productPrice.value;
          const ShortDescription = form.ShortDescription.value;
          const rating = form.rating.value;
          const allData = {
               image,
               productName,
               brandName,
               productType,
               productPrice,
               ShortDescription,
               rating,
          };
          console.log(allData);
          Swal.fire({
               title: "Are you sure?",
               text: "Update this Product!",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, delete it!",
          }).then((result) => {
               if (result.isConfirmed) {
                    fetch(` https://techbd-server.vercel.app/products/${_id}`, {
                         method: "PUT",
                         headers: {
                              "content-type": "application/json",
                         },
                         body: JSON.stringify(allData),
                    })
                    .then((res) => res.json())
                    .then((data) => {
                         console.log(data);
                         if (data.modifiedCount > 0) {
                              Swal.fire({
                                   icon: "success",
                                   text: "Inserted successfully!",
                              });
                         }
                    });
               }
          });

          // fetch(` https://techbd-server.vercel.app/products/${_id}`, {
          //      method: "PUT",
          //      headers: {
          //           "content-type": "application/json",
          //      },
          //      body: JSON.stringify(allData),
          // })
          //      .then((res) => res.json())
          //      .then((data) => {
          //           console.log(data);
          //           if (data.modifiedCount > 0) {
          //                Swal.fire({
          //                     icon: "success",
          //                     text: "Update successfully!",
          //                });
          //           }
          //      });

          // form.reset();
          // e.target.image.value=''
     };
     return (
          <div>
               <div className=" bg-gradient-to-r from-blue-700 to-blue-400 min-h-screen container mx-auto">
                    <h2 className="text-center text-white pt-5 text-2xl md:text-4xl">
                         Update Product Info Here
                    </h2>
                    <div className="container mx-auto">
                         <form onSubmit={handleUpdateProduct} className="mx-5">
                              {/* form 4th row */}
                              {/* <div className=""> */}
                              <div className="form-control w-full">
                                   <label className="label">
                                        <span className="label-text font-bold">
                                             Image
                                        </span>
                                   </label>
                                   <label className="input-group rounded-3xl">
                                        <input
                                             defaultValue={image}
                                             type="text"
                                             name="image"
                                             placeholder="Image Url"
                                             className="input input-bordered w-full"
                                        />
                                   </label>
                              </div>
                              {/* </div> */}
                              {/* form 1st row */}
                              <div className="flex gap-4">
                                   <div className="form-control md:w-1/2">
                                        <label className="label">
                                             <span className="label-text font-bold">
                                                  Product Name
                                             </span>
                                        </label>
                                        <label className="input-group">
                                             <input
                                                  defaultValue={productName}
                                                  type="text"
                                                  name="productName"
                                                  placeholder="Product Name"
                                                  className=" input input-bordered w-full"
                                             />
                                        </label>
                                   </div>
                                   <div className="form-control md:w-1/2">
                                        <label className="label">
                                             <span className="font-bold label-text">
                                                  Brand Name
                                             </span>
                                        </label>
                                        <label className="input-group">
                                             <input
                                                  defaultValue={brandName}
                                                  type="text"
                                                  name="brandName"
                                                  placeholder="Brand Name"
                                                  className="input w-full input-bordered"
                                             />
                                        </label>
                                   </div>
                              </div>
                              {/* form 2nd row */}
                              <div className="flex gap-4">
                                   <div className="form-control md:w-1/2">
                                        <label className="label">
                                             <span className="label-text font-bold">
                                                  Product-Type
                                             </span>
                                        </label>
                                        <label className="input-group">
                                             <input
                                                  defaultValue={productType}
                                                  type="text"
                                                  name="productType"
                                                  placeholder="productType"
                                                  className="input input-bordered w-full"
                                             />
                                        </label>
                                   </div>
                                   <div className="form-control md:w-1/2">
                                        <label className="label">
                                             <span className="font-bold label-text">
                                                  Price
                                             </span>
                                        </label>
                                        <label className="input-group">
                                             <input
                                                  defaultValue={productPrice}
                                                  type="text"
                                                  name="productPrice"
                                                  placeholder="Product Price"
                                                  className="input w-full input-bordered"
                                             />
                                        </label>
                                   </div>
                              </div>
                              {/* form 3rd row */}
                              <div className="flex gap-4">
                                   <div className="form-control md:w-1/2">
                                        <label className="label">
                                             <span className="label-text font-bold">
                                                  Short description
                                             </span>
                                        </label>
                                        <label className="input-group">
                                             <input
                                                  defaultValue={
                                                       ShortDescription
                                                  }
                                                  type="text"
                                                  name="ShortDescription"
                                                  placeholder="Short description"
                                                  className="input input-bordered w-full"
                                             />
                                        </label>
                                   </div>
                                   <div className="form-control md:w-1/2">
                                        <label className="label">
                                             <span className="font-bold label-text">
                                                  Rating
                                             </span>
                                        </label>
                                        <label className="input-group">
                                             <input
                                                  defaultValue={rating}
                                                  type="text"
                                                  name="rating"
                                                  placeholder="Rating"
                                                  className="input w-full input-bordered"
                                             />
                                        </label>
                                   </div>
                              </div>
                              <div className="w-[50%] mx-auto">
                                   <input
                                        className="btn mt-4 w-full bg-gradient-to-r from-blue-700 to-blue-900 border-none text-white"
                                        type="submit"
                                        value="Update Product"
                                   />
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default UpdateProduct;
