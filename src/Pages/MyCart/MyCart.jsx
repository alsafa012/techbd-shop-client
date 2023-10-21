import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ShowMyCart from "./ShowMyCart";
import { AuthContext } from "../../Provider/AuthProvider";

const MyCart = () => {
     const { user } = useContext(AuthContext);
     const productData = useLoaderData();
     const [addProduct, setAddProduct] = useState([]);
     // console.log(productData[0].currentUser)

     const myUser = user?.email;
     useEffect(() => {
          if (myUser) {
               const cartProduct = productData.filter(
                    (item) => item.currentUser === myUser
               );
               setAddProduct(cartProduct);
          }
     }, [myUser, productData]);

     return (
          <div className="container mx-auto">
               {addProduct.length === 0 ? (
                    <div className="text-center mx-auto text-xl md:text-3xl font-bold mt-20 space-y-2">
                         <h1>Oops...!</h1>
                         <h3>No Product Added Yet.</h3>
                         <Link to={"/"}>
                              <button className="btn mt-2 bg-gradient-to-r from-blue-700 to-blue-400 text-white border-none">
                                   Click Here for Home Page..
                              </button>
                         </Link>
                    </div>
               ) : (
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
               )}
          </div>
     );
};

export default MyCart;
