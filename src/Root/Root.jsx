import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/HeaderSection/Navbar/Navbar";
export const theamToggleContext = createContext();
const Root = () => {
     const [theme, setTheme] = useState(null);
     // const [theme, setTheme] = useState("light");
     useEffect(() => {
          if (theme === "dark") {
               document.documentElement.classList.add("dark");
          } else {
               document.documentElement.classList.remove("dark");
          }
          // if(window.matchMedia('(prefers-color-scheme: dark)').matches){
          //      setTheme("dark");
          // }else{
          //      setTheme("light");
          // }
     }, [theme]);
     const handleDark = () => {
          setTheme(theme === "dark" ? "light" : "dark");
     };
     return (
          <div className="bg-white dark:bg-gray-600">
               <div className="container mx-auto">
                    <Navbar handleDark={handleDark}></Navbar>
               </div>
               <theamToggleContext.Provider value={theme}>
                    <Outlet></Outlet>
               </theamToggleContext.Provider>
          </div>
     );
};

export default Root;
