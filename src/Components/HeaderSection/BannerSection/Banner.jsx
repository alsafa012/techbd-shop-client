import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Banner = () => {
     useEffect(() => {
          AOS.init();
     }, []);
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
                              <h1
                                   data-aos="flip-left"
                                   data-aos-easing="ease-out-cubic"
                                   data-aos-duration="2000"
                                   data-aos-offset="100"
                         //           data-aos-easing="ease-out-cubic"
                         // data-aos-duration="2000"
                                   className="text-3xl md:text-4xl lg:text-5xl font-bold"
                              >
                                   Welcome to RJ Tech BD
                              </h1>
                              <p className="mt-2">
                                   Welcome to RJ Tech BD: Your Ultimate Tech
                                   Destination.Your Tech Dreams Start Here: RJ
                                   Tech BD.
                              </p>
                              <p>Shop Smart, Shop Tech with RJ Tech BD.</p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Banner;
