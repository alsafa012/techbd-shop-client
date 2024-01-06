import { Outlet } from "react-router-dom";
import Navbar from "../Components/HeaderSection/Navbar/Navbar";
const Root = () => {
     return (
          <div className="bg-white dark:bg-black">
               <Navbar></Navbar>

               <Outlet></Outlet>
          </div>
     );
};

export default Root;
