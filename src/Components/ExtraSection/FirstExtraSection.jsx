import React from 'react';
import { GiPartyPopper } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { MdOutlineHomeWork } from "react-icons/md";

const FirstExtraSection = () => {
     return (
          <div className='container mx-auto'>
          <div className="my-5 md:my-14">
          <div>
               <h2 className="text-center text-2xl md:text-3xl font-bold">
                   <span className='text-blue-400'>Hello! </span> Buy Your Future Tech From Us..
               </h2>
               <p className="w-[50%] mx-auto text-center my-5 text-sm font-light">
                    
               </p>
          </div>
          <div className="grid gap-5  md:grid-cols-2 lg:grid-cols-4 font-light mx-4 md:mx-auto">
               <div className="text-center space-y-3 shadow-lg py-5 rounded-lg">
                    <div className="flex justify-center text-5xl my-2 ">
                         <MdOutlineHomeWork></MdOutlineHomeWork>
                    </div>
                    <p >Find the perfect Product Here.</p>
               </div>
               <div className="text-center space-y-3 shadow-lg py-5 rounded-lg">
                    <div className="flex justify-center text-5xl my-2 ">
                         <BiCommentDetail></BiCommentDetail>
                    </div>
                    <p>Get a better Service.</p>
               </div>
               <div className="text-center space-y-3 shadow-lg py-5 rounded-lg">
                    <div className="flex justify-center text-5xl my-2 ">
                         <FaHandsHelping></FaHandsHelping>
                    </div>
                    <p>Let us help you for chosen your future Product.</p>
               </div>
               <div className="text-center space-y-3 shadow-lg py-5 rounded-lg">
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