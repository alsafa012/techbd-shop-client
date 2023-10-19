import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/HeaderSection/Navbar/Navbar";

const Root = () => {
     return (
          <div>
               <div className="container mx-auto">
               <Navbar></Navbar>
               </div>
               <Outlet></Outlet>
          </div>
     );
};

export default Root;
