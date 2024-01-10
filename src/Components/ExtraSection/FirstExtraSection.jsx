import React, { useEffect } from 'react';
import { GiPartyPopper } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { MdOutlineHomeWork } from "react-icons/md";
import Aos from 'aos';

const FirstExtraSection = () => {
     useEffect(() => {
          Aos.init();
     }, []);
     return (
          <div className='container mx-auto'>
          <div className="my-5 md:my-14">
               <h2  data-aos="flip-left"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="2000" className=" text-center text-2xl md:text-3xl font-bold text-blue-400 pb-5">Hello!
                   <span className='text-black dark:text-white'> Buy Your Future Tech From Us..</span>
               </h2>
               {/* <p className="bg-red-50 w-[50%] mx-auto text-center my-5 text-sm font-light">
                    
               </p> */}
       
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 font-light mx-4 md:mx-auto">
               <div  data-aos="flip-left"
               data-aos-offset="100"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="2000" className="text-center space-y-3 shadow-lg py-5 rounded-lg bg-white">
                    <div className="flex justify-center text-5xl my-2 ">
                         <MdOutlineHomeWork></MdOutlineHomeWork>
                    </div>
                    <p >Find the perfect Product Here.</p>
               </div>
               <div  data-aos="flip-left"
               data-aos-offset="100"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="2000" className="text-center space-y-3 shadow-lg py-5 rounded-lg bg-white">
                    <div className="flex justify-center text-5xl my-2 ">
                         <BiCommentDetail></BiCommentDetail>
                    </div>
                    <p>Get a better Service.</p>
               </div>
               <div  data-aos="flip-left"
               data-aos-offset="100"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="2000" className="text-center space-y-3 shadow-lg py-5 rounded-lg bg-white">
                    <div className="flex justify-center text-5xl my-2 ">
                         <FaHandsHelping></FaHandsHelping>
                    </div>
                    <p>Let us help you for chosen your future Product.</p>
               </div>
               <div  data-aos="flip-left"
               data-aos-offset="100"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="2000" className="text-center space-y-3 shadow-lg py-5 rounded-lg bg-white">
                    <div className="flex justify-center text-5xl my-2 ">
                         <GiPartyPopper></GiPartyPopper>
                    </div>
                    <p>Enjoy your life with your dreamy product.</p>
               </div>
          </div>
     </div>
     </div>
     );
};

export default FirstExtraSection;