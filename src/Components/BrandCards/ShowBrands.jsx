import React from "react";
import { Link } from "react-router-dom";

const ShowBrands = ({ brand }) => {
     // const navigate = useNavigate();
     // const handle = () => {
     //      if (brand.length === 0) {
     //           navigate("/login");
     //      }
     // };
     return (
          <div>
               {/* <img src={brand.brand_img} alt="" />
               <p>{brand.brand}</p> */}
               <Link  to={`/data/${brand.brandName}`}>
                    {/* if(brand.length === 0 ){navigate("/login")} */}
                    <div className="card bg-base-100 shadow-xl image-full">
                         {/* <figure> */}
                         <img
                              className="h-[250px] w-full"
                              src={brand.brand_img}
                              alt="brands"
                         />
                         {/* </figure> */}
                         <div className="card-body">
                              <h2 className="card-title">{brand.brandName}</h2>
                         </div>
                    </div>
               </Link>
          </div>
     );
};

export default ShowBrands;
