import React from "react";
import Footer from "../../Components/Footer/Footer";
import WebsiteTitle from "../../Components/WebsiteTitle/WebsiteTitle";

const AboutUs = () => {
     return (
          <div>
               <div className="">
                    <WebsiteTitle title={"TechBD || About Us"}></WebsiteTitle>

                    <h1 className="w-[300px] mx-auto mb-5 text-center text-2xl border-b-4 border-blue-600 md:text-4xl lg:text-5xl font-bold text-blue-600 mt-8 md:mt-16">
                         About Us
                    </h1>
                    {/* <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-center my-10"></div> */}
                    <div className="container mx-auto mb-10 dark:text-white">
                         <div className="">
                              <h2 className="text-2xl font-medium text-center underline">
                                   Welcome to RJ Tech Bd, Where Innovation Meets
                                   Excellence!
                              </h2>
                              <p className="w-[80%] mx-auto mt-5 text-justify my-3">
                                   At RJ Tech BD, we're more than just a tech
                                   store; we're your gateway to unforgettable
                                   experiences, cutting-edge innovation, and
                                   top-notch customer service. We understand
                                   that technology is an integral part of modern
                                   life, and we're here to make sure your
                                   tech-related dreams come true. Our journey
                                   started with a simple idea: to provide the
                                   latest tech gadgets, accessories, and
                                   solutions that meet your unique needs. With
                                   years of experience and a dedicated team of
                                   tech enthusiasts, we've turned that vision
                                   into reality.
                              </p>
                         </div>
                         <div className="w-[80%] mx-auto">
                              <h2 className="text-2xl font-bold">
                                   Our Mission
                              </h2>
                              <p className="w-[80%] my-3">
                                   Our mission is crystal clear: to offer
                                   exceptional tech experiences that leave a
                                   lasting impression on your digital journey.
                                   We believe that your tech choices should
                                   reflect your personality, style, and
                                   aspirations. That's why we work tirelessly to
                                   turn your tech dreams into reality. From the
                                   moment you explore our offerings to the final
                                   click of the "buy" button, we're here every
                                   step of the way to ensure that your tech
                                   experience is nothing short of perfection.
                              </p>
                         </div>
                         <div className="space-y-3 w-[80%] mx-auto">
                              <p className="text-2xl font-bold">Our Values</p>
                              <p>
                                   Creativity: We thrive on innovation,
                                   constantly seeking the latest tech trends to
                                   keep you at the forefront of technology
                              </p>

                              <p>
                                   Attention to Detail: We take care of every
                                   detail, ensuring that your tech products and
                                   solutions are delivered flawlessly.
                              </p>
                              <p>
                                   Customer-Centric: Your satisfaction is our
                                   highest priority. We listen, understand, and
                                   deliver solutions that cater to your tech
                                   needs.
                              </p>
                              <p>
                                   Community Involvement: We're committed to
                                   giving back to our tech community and are
                                   proud to be a socially responsible business.
                              </p>
                         </div>
                    </div>
                    <Footer></Footer>
               </div>
          </div>
     );
};

export default AboutUs;
