import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowMyCart from "./ShowMyCart";

const MyCart = () => {
     const productData = useLoaderData();
     const [addProduct , setAddProduct]=useState(productData)

     console.log(addProduct);

     return (
          <div className="container mx-auto">
               <div className="grid md:grid-cols-2 gap-5">
                    {addProduct.map((product) => (
                         <ShowMyCart
                         addProduct={addProduct}
                         setAddProduct={setAddProduct}
                              key={product._id}
                              product={product}
                         ></ShowMyCart>
                    ))}
               </div>
          </div>
     );
};

export default MyCart;
