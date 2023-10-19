import React from "react";
import { Link } from "react-router-dom";

const ShowBrands = ({ brand }) => {
     const handle=()=>{
          console.log('okkk')
     }
     return (
          <div>
               {/* <img src={brand.brand_img} alt="" />
               <p>{brand.brand}</p> */}
               <Link onClick={handle} to={`/data/${brand.brandName}`}>
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
