import React from "react";

const Banner = () => {
     return (
          <div className="container mx-auto">
               <div
                    className="hero h-[100vh]"
                    style={{
                         backgroundImage:
                              "url(https://i.ibb.co/cL1ghJd/6074571.jpg)",
                    }}
               >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                         <div className="max-w-md">
                              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                                  Welcome to RJ Tech BD
                              </h1>
                              <p className="mt-2">
                              Welcome to RJ Tech BD: Your Ultimate Tech Destination.Your Tech Dreams Start Here: RJ Tech BD.
                              </p>
                              <p>Shop Smart, Shop Tech with RJ Tech BD.</p>
                              
                              
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Banner;
