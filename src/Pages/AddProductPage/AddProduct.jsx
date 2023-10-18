import React from "react";

const AddProduct = () => {
     const handleAddProduct =(e)=>{
          e.preventDefault();
          // console.log("sasadasdasd")
          const form = e.target;
          const image = form.image.value;
          const productName = form.productName.value;
          const brandName = form.brandName.value;
          const productType = form.productType.value;
          const productPrice = form.productPrice.value;
          const ShortDescription = form.ShortDescription.value;
          const rating = form.rating.value;
          console.log(image,productName ,brandName, productType, productPrice,ShortDescription,rating)





          form.reset()
     }
     return (
          <div className=" bg-gradient-to-r from-blue-700 to-blue-400 min-h-screen">
               <div className="container mx-auto">
                    <form onSubmit={handleAddProduct} className="mx-5">
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
                              value="Add Product"
                         />
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default AddProduct;
