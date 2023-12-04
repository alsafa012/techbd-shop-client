import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CountSection = () => {
     const [scrollTrigger,setScrollTrigger]= useState(false);
     return (
          <ScrollTrigger onEnter={()=> setScrollTrigger(true)} onExit={()=>setScrollTrigger(false)}>
               <div className="grid grid-cols-3 gap-5 text-center border ">
                    <div>
                         <h2 className="text-2xl">
                              {scrollTrigger&&<CountUp start={0} end={100} duration={2.75} />}%
                         </h2>
                    </div>
                    <div>
                         <h2 className="text-2xl">
                              {scrollTrigger&&<CountUp start={0} end={100} duration={2.75} />}%
                         </h2>
                    </div>
                    <div>
                         <h2 className="text-2xl">
                              {scrollTrigger&&<CountUp start={0} end={100} duration={2.75} />}%
                         </h2>
                    </div>
                   
               </div>
          </ScrollTrigger>
     );
};

export default CountSection;
