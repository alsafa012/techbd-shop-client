import React, { useContext } from "react";
import Rating from "react-rating";
import {
     Link,
     Navigate,
     useLoaderData,
     useLocation,
     useNavigate,
} from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const BrandDetailsPage = () => {
     const { user } = useContext(AuthContext);
     // console.log(user.email);
     const singleInfo = useLoaderData();
     // console.log(singleInfo);
     const location = useLocation();
     console.log(location);
     const navigate = useNavigate();
     //     console.log(navigate);

     const {
          _id,
          productName,
          brandName,
          image,
          ShortDescription,
          productPrice,
          productType,
          rating,
     } = singleInfo;

     const handleAddProduct = () => {
          const currentUser = user.email;
          // console.log(currentUser);
          const productName = singleInfo.productName;
          const brandName = singleInfo.brandName;
          const image = singleInfo.image;
          const ShortDescription = singleInfo.ShortDescription;
          const productPrice = singleInfo.productPrice;
          const productType = singleInfo.productType;
          const rating = singleInfo.rating;
          const allData = {
               currentUser,
               productName,
               brandName,
               image,
               ShortDescription,
               productPrice,
               productType,
               rating,
          };
          fetch(" http://localhost:5000/addCart", {
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
                    navigate(location.pathname && location.pathname);
                    // navigate(location.pathname && location.pathname);
                    // console.log(data);
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
                              <p>Price: {productPrice} TK</p>
                              <p>Type: {productType}</p>
                              {/* <p>Rating: {rating}</p> */}
                              <p>
                                   <Rating
                                        emptySymbol={
                                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                             <path d="M9.47966 1.49897C9.52196 1.3958 9.59398 1.30755 9.68658 1.24543C9.77918 1.18331 9.88816 1.15015 9.99966 1.15015C10.1112 1.15015 10.2201 1.18331 10.3127 1.24543C10.4053 1.30755 10.4774 1.3958 10.5197 1.49897L12.6447 6.60997C12.6844 6.70561 12.7498 6.78841 12.8336 6.84928C12.9174 6.91015 13.0164 6.94672 13.1197 6.95497L18.6377 7.39697C19.1367 7.43697 19.3387 8.05997 18.9587 8.38497L14.7547 11.987C14.6761 12.0542 14.6176 12.1417 14.5855 12.2399C14.5534 12.3382 14.5489 12.4434 14.5727 12.544L15.8577 17.929C15.8835 18.037 15.8767 18.1503 15.8382 18.2545C15.7997 18.3587 15.7312 18.4491 15.6413 18.5144C15.5514 18.5797 15.4442 18.6168 15.3332 18.6212C15.2222 18.6256 15.1124 18.597 15.0177 18.539L10.2927 15.654C10.2044 15.6002 10.103 15.5717 9.99966 15.5717C9.8963 15.5717 9.79493 15.6002 9.70666 15.654L4.98166 18.54C4.88692 18.598 4.77712 18.6266 4.66612 18.6222C4.55512 18.6178 4.44791 18.5807 4.35803 18.5154C4.26815 18.4501 4.19962 18.3597 4.16111 18.2555C4.1226 18.1513 4.11584 18.038 4.14166 17.93L5.42666 12.544C5.45049 12.4434 5.44611 12.3381 5.414 12.2399C5.38189 12.1416 5.3233 12.0541 5.24466 11.987L1.04066 8.38497C0.956476 8.31258 0.895573 8.21692 0.865612 8.11001C0.835651 8.00309 0.83797 7.88971 0.872278 7.78412C0.906586 7.67852 0.971351 7.58543 1.05843 7.51654C1.1455 7.44766 1.25101 7.40606 1.36166 7.39697L6.87966 6.95497C6.98291 6.94672 7.08188 6.91015 7.16569 6.84928C7.2495 6.78841 7.31488 6.70561 7.35466 6.60997L9.47966 1.49897Z"  stroke="#FFC107"/>
                                             </svg>
                                             // <svg
                                             //      xmlns="http://www.w3.org/2000/svg"
                                             //      fill="none"
                                             //      viewBox="0 0 24 24"
                                             //      strokeWidth={1.5}
                                             //      stroke="currentColor"
                                             //      className="w-6 h-6"
                                             // >
                                             //      <path
                                             //           strokeLinecap="round"
                                             //           strokeLinejoin="round"
                                             //           d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                             //      />
                                             // </svg>
                                        }
                                        fullSymbol={
                                           
                                             <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="20"
                                                  height="20"
                                                  viewBox="0 0 20 20"
                                                  fill="none"
                                             >
                                                  <path
                                                       
                                                       d="M8.788 1.21006C9.236 0.133063 10.764 0.133063 11.212 1.21006L13.294 6.21706L18.698 6.65006C19.862 6.74306 20.334 8.19506 19.447 8.95506L15.33 12.4821L16.587 17.7551C16.858 18.8911 15.623 19.7881 14.627 19.1801L10 16.3541L5.373 19.1801C4.377 19.7881 3.142 18.8901 3.413 17.7551L4.67 12.4821L0.553003 8.95506C-0.333998 8.19506 0.138003 6.74306 1.302 6.65006L6.706 6.21706L8.788 1.21106V1.21006Z"
                                                       fill="#FFC107"
                                                  />
                                             </svg>
                                           
                                        }
                                        initialRating={rating}
                                        readonly
                                   />
                              </p>
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
