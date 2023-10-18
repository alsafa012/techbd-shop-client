import React from "react";

const ShowBrands = ({ brand }) => {
     return (
          <div>
               {/* <img src={brand.brand_img} alt="" />
               <p>{brand.brand}</p> */}
               <div className="card bg-base-100 shadow-xl image-full">
                    {/* <figure> */}
                         <img className="h-[250px] w-full" src={brand.brand_img} alt="brands" />
                    {/* </figure> */}
                    <div className="card-body">
                         <h2 className="card-title">{brand.brand}</h2>
                    </div>
               </div>
          </div>
     );
};

export default ShowBrands;
