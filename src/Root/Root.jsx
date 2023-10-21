import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/HeaderSection/Navbar/Navbar";

const Root = () => {
     // const []= useState("light")
     const handleDark=()=>{
          console.log("fark");
     }
     return (
          <div>
               <div className="container mx-auto">
               <Navbar handleDark={handleDark}></Navbar>
               </div>
               <Outlet></Outlet>
          </div>
     );
};

export default Root;
