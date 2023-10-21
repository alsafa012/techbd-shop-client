import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowMyCart from "./ShowMyCart";
import { AuthContext } from "../../Provider/AuthProvider";

const MyCart = () => {
     const { user } = useContext(AuthContext);
     const productData = useLoaderData();
     const [addProduct, setAddProduct] = useState([]);

     const myUser = user?.email;
     useEffect(() => {
          if (myUser) {
               const cartProduct = productData.filter(
                    (item) => item.currentUser === myUser
               );
               setAddProduct(cartProduct);
          }
     }, [myUser,productData]);

     // console.log(productData, myUser);
     // console.log(addProduct);

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
