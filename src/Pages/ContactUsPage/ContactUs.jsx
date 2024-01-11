import React, { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import { CiLocationOn } from "react-icons/ci";
import { PiPhoneDuotone } from "react-icons/pi";
import { AiOutlineFieldTime } from "react-icons/ai";
import Aos from "aos";

const ContactUs = () => {
     useEffect(() => {
          Aos.init();
     }, []);
     return (
          <div>
               <div>
                    <h1
                         data-aos="fade-down"
                         data-aos-offset="100"
                         data-aos-easing="ease-in-cubic"
                         data-aos-duration="2000"
                         className="w-[300px] mx-auto mb-5 text-center text-2xl border-b-4 border-blue-400 md:text-4xl lg:text-5xl font-bold text-blue-400 mt-8 md:mt-16"
                    >
                         Contact Us
                    </h1>
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-center my-10">
                         <div
                              data-aos="flip-left"
                              data-aos-easing="ease-in-cubic"
                              data-aos-duration="2000"
                              data-aos-offset="100"
                              className="space-y-4 shadow-xl rounded-lg p-5 bg-white"
                         >
                              <div className="flex justify-center text-5xl">
                                   <p>
                                        <CiLocationOn></CiLocationOn>
                                   </p>
                              </div>
                              <h2 className="text-xl font-medium">
                                   Postal Address
                              </h2>
                              <div className="font-light text-lg">
                                   <p>RJ Tech</p>
                                   <p>85/7 Mohammadpur </p>
                                   <p>Dhaka, ON BD</p>
                              </div>
                         </div>
                         <div
                              data-aos="fade-up"
                              data-aos-offset="100"
                              data-aos-easing="ease-in-cubic"
                              data-aos-duration="2000"
                              className="space-y-4 shadow-xl rounded-lg p-5 bg-white"
                         >
                              <div className="flex justify-center text-5xl">
                                   <p>
                                        <AiOutlineFieldTime></AiOutlineFieldTime>
                                   </p>
                              </div>

                              <h2 className="text-xl font-medium">
                                   Phone & E-mail
                              </h2>
                              <div className="font-light text-lg">
                                   <p className="text-blue-400">
                                        Phone:018456....9
                                   </p>
                                   <p>Fax: 1-800-69-45</p>
                                   <p>
                                        <a
                                             className="text-blue-400 underline hover:no-underline"
                                             href="#"
                                        >
                                             alsafa024@gmail.com
                                        </a>
                                   </p>
                              </div>
                         </div>
                         <div
                              data-aos="flip-right"
                              data-aos-offset="100"
                              data-aos-easing="ease-in-cubic"
                              data-aos-duration="2000"
                              className=" space-y-4 shadow-xl rounded-lg p-5 bg-white"
                         >
                              <div className="flex justify-center text-5xl">
                                   <p>
                                        <PiPhoneDuotone></PiPhoneDuotone>
                                   </p>
                              </div>
                              <h2 className="text-xl font-medium">
                                   Open Hours
                              </h2>
                              <div className="font-light text-lg">
                                   <p>Monday – Friday</p>
                                   <p>Always Open</p>
                                   Weekend Closed
                                   <p></p>
                              </div>
                         </div>
                    </div>
                    <Footer></Footer>
               </div>
          </div>
     );
};

export default ContactUs;
