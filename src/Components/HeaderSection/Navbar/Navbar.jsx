import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { TbSunHigh } from "react-icons/tb";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from "../../../DarkModeHook/DarkModeHook";

const Navbar = () => {
     const { handleDark, mode } = useTheme();
     const { user, userSignOut } = useContext(AuthContext);
     // const [toggle, setToggle] = useState(false);
     // const handleToggle = () => {
     //      setToggle(!toggle);
     // };
     const navigate = useNavigate();
     const handleSignOut = () => {
          userSignOut()
               .then(() => {
                    Swal.fire(
                         "Good job!",
                         "User Sign out successfully",
                         "success"
                    );
                    navigate("/");
               })
               .catch();
     };
     const navLists = (
          <>
               <li>
                    <NavLink
                         to="/"
                         // className={({ isActive, isPending }) =>
                         //      isPending
                         //           ? "pending"
                         //           : isActive
                         //           ? "text-[#ff6900] underline"
                         //           : ""
                         // }
                    >
                         Home
                    </NavLink>
               </li>
               <li>
                    <NavLink
                         to="/addProduct"
                         // className={({ isActive, isPending }) =>
                         //      isPending
                         //           ? "pending"
                         //           : isActive
                         //           ? "text-[#ff6900] underline"
                         //           : ""
                         // }
                    >
                         Add Product
                    </NavLink>
               </li>

               {user && (
                    <li>
                         <NavLink
                              to="/myCart"
                              // className={({ isActive, isPending }) =>
                              //      isPending
                              //           ? "pending"
                              //           : isActive
                              //           ? "text-[#ff6900] underline"
                              //           : ""
                              // }
                         >
                              My Cart
                         </NavLink>
                    </li>
               )}
               {/* <li>
                    <NavLink
                         to="/register"
                         // className={({ isActive, isPending }) =>
                         //      isPending
                         //           ? "pending"
                         //           : isActive
                         //           ? "text-[#ff6900] underline"
                         //           : ""
                         // }
                    >
                         Register
                    </NavLink>
               </li> */}
               {!user && (
                    <li>
                         <NavLink
                              to="/login"
                              // className={({ isActive, isPending }) =>
                              //      isPending
                              //           ? "pending"
                              //           : isActive
                              //           ? "text-[#ff6900] underline"
                              //           : ""
                              // }
                         >
                              Login
                         </NavLink>
                    </li>
               )}
               <li>
                    <NavLink
                         to="/contact"
                         // className={({ isActive, isPending }) =>
                         //      isPending
                         //           ? "pending"
                         //           : isActive
                         //           ? "text-[#ff6900] underline"
                         //           : ""
                         // }
                    >
                         Contact Us
                    </NavLink>
               </li>
               <li>
                    <NavLink
                         to="/about"
                         // className={({ isActive, isPending }) =>
                         //      isPending
                         //           ? "pending"
                         //           : isActive
                         //           ? "text-[#ff6900] underline"
                         //           : ""
                         // }
                    >
                         About us
                    </NavLink>
               </li>
          </>
     );
     return (
          <div className="bg-gradient-to-r from-blue-900 to-blue-900">
               <div className="navbar bg-base-100 bg-gradient-to-r from-blue-900 to-blue-900 container mx-auto">
                    <div className="navbar-start">
                         <div className="dropdown">
                              <label
                                   tabIndex={0}
                                   className="btn btn-ghost lg:hidden"
                              >
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                   >
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth="2"
                                             d="M4 6h16M4 12h8m-8 6h16"
                                        />
                                   </svg>
                              </label>
                              <ul
                                   tabIndex={0}
                                   className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
                              >
                                   {navLists}
                              </ul>
                         </div>
                         <img
                              className="rounded-full h-[50px] w-[50px]"
                              src="https://i.ibb.co/dQ14xFH/sasas.jpg"
                              alt=""
                         />

                         <p className="btn btn-ghost text-xl md:text-2xl text-white font-extrabold italic">
                              RJ Tech
                         </p>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal px-1 text-white">
                              {navLists}
                         </ul>
                    </div>

                    <div className="navbar-end">
                         {/* <button onClick={handleDark} className="btn">
                                   {mode === "light" ? "light" : "dark"}
                              </button> */}
                         {/* 000000000000000000000000000000000 */}
                         {/* <div className="mr-2">
                              {mode === "light" ? (
                                   <button
                                        className="text-3xl text-white"
                                        onClick={handleDark}
                                   >
                                        <TbSunHigh></TbSunHigh>
                                   </button>
                              ) : (
                                   <button
                                        onClick={handleDark}
                                        className="text-3xl"
                                   >
                                        <MdDarkMode></MdDarkMode>
                                   </button>
                              )}
                         </div>
                         <input
                              type="checkbox"
                              className="toggle"
                              onClick={handleDark}
                              checked={mode === "light" ? false : true}
                         /> */}

                         {/* 00000000000000000000000000 */}
                         <div className="dropdown dropdown-end">
                              <label
                                   tabIndex={0}
                                   className="btn btn-ghost btn-circle avatar"
                              >
                                   {user ? (
                                        <div className="w-10 rounded-full">
                                             <img src={user.photoURL} />
                                        </div>
                                   ) : (
                                        <Link to="/login">
                                             <button className="text-white">
                                                  Sign Up
                                             </button>
                                        </Link>
                                   )}
                              </label>

                              {user && (
                                   <div>
                                        <ul
                                             tabIndex={0}
                                             className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                                        >
                                             <div>
                                                  <li>
                                                       <a className="font-medium">
                                                            User:
                                                            {user.displayName}
                                                       </a>
                                                  </li>
                                                  <li>
                                                       {user ? (
                                                            <button
                                                                 className="font-medium"
                                                                 onClick={
                                                                      handleSignOut
                                                                 }
                                                            >
                                                                 Sign Out
                                                            </button>
                                                       ) : (
                                                            <Link to="/login">
                                                                 <button className="">
                                                                      Sign Up
                                                                 </button>
                                                            </Link>
                                                       )}
                                                  </li>
                                             </div>
                                        </ul>
                                   </div>
                              )}
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;
