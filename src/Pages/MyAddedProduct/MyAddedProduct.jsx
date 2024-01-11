import { Link, useLoaderData } from "react-router-dom";
import ShowAddedProducts from "./ShowAddedProducts";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const MyAddedProduct = () => {
     const [allProduct, setAllProduct] = useState([]);
     const myAddedProduct = useLoaderData();
     // console.log(allProduct);
     const { user } = useContext(AuthContext);
     useEffect(() => {
          if (user) {
               const filterProductByUser = myAddedProduct.filter(
                    (product) => product.addedBy === user?.email
               );
               setAllProduct(filterProductByUser);
          }
     }, [myAddedProduct, user]);
     const handleDeleteProduct = (id) => {
          // console.log(id);
          Swal.fire({
               title: "Are you sure?",
               text: "You won't be able to revert this!",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, delete it!",
          }).then((result) => {
               if (result.isConfirmed) {
                    fetch(`http://localhost:5000/products/${id}`, {
                         method: "DELETE",
                    })
                         .then((res) => res.json())
                         .then((data) => {
                              if (data.deletedCount > 0) {
                                   // setAllProduct(data)
                                   const remainingProduct = allProduct.filter(
                                        (item) => item._id !== id
                                   );
                                   setAllProduct(remainingProduct);
                                   Swal.fire({
                                        title: "Deleted!",
                                        text: "Your file has been deleted.",
                                        icon: "success",
                                   });
                              }
                         });
               }
          });
     };
     return (
          <div className="container mx-auto">
               {allProduct.length === 0 ? (
                    <div className="text-5xl text-center mt-32 space-y-5">
                         <p>Oops...!</p>
                         <p>You did not add any product yet</p>
                         <div>
                              <Link to="/addProduct">
                                   <button className="btn btn-primary bg-gradient-to-r from-blue-700 to-blue-900 border-none">
                                        Click here for Add Product
                                   </button>
                              </Link>
                         </div>
                    </div>
               ) : (
                    <>
                         <h1 className="text-3xl font-bold text-center my-5">
                              Total AddedProduct: {allProduct.length}
                         </h1>
                         <div className="grid md:grid-cols-2 gap-4 my-5">
                              {allProduct.map((product) => (
                                   <ShowAddedProducts
                                        handleDeleteProduct={
                                             handleDeleteProduct
                                        }
                                        key={product._id}
                                        product={product}
                                   ></ShowAddedProducts>
                              ))}
                         </div>
                    </>
               )}
          </div>
     );
};

export default MyAddedProduct;
