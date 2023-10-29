import { Outlet } from "react-router-dom";
import Navbar from "../Components/HeaderSection/Navbar/Navbar";
const Root = () => {
     return (
          <div className="bg-white dark:bg-black">
               <div className="container mx-auto">
                    <Navbar></Navbar>
               </div>
               <Outlet></Outlet>
          </div>
     );
};

export default Root;
