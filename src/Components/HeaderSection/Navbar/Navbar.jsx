import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
     const { user, userSignOut } = useContext(AuthContext);
     const handleSignOut = () => {
          userSignOut()
               .then(() => {
                    alert("sign out");
               })
               .catch();
     };
     const navLists = (
          <>
               <li>
                    <NavLink
                         to="/"
                         className={({ isActive, isPending }) =>
                              isPending
                                   ? "pending"
                                   : isActive
                                   ? "text-[#ff6900] underline"
                                   : ""
                         }
                    >
                         Home
                    </NavLink>
               </li>
               <li>
                    <NavLink
                         to="/addProduct"
                         className={({ isActive, isPending }) =>
                              isPending
                                   ? "pending"
                                   : isActive
                                   ? "text-[#ff6900] underline"
                                   : ""
                         }
                    >
                         Add Product
                    </NavLink>
               </li>
               <li>
                    <NavLink
                         to="/register"
                         className={({ isActive, isPending }) =>
                              isPending
                                   ? "pending"
                                   : isActive
                                   ? "text-[#ff6900] underline"
                                   : ""
                         }
                    >
                         Register
                    </NavLink>
               </li>
               <li>
                    <NavLink
                         to="/login"
                         className={({ isActive, isPending }) =>
                              isPending
                                   ? "pending"
                                   : isActive
                                   ? "text-[#ff6900] underline"
                                   : ""
                         }
                    >
                         Login
                    </NavLink>
               </li>
          </>
     );
     return (
          <div>
               <div>
                    <div className="navbar bg-base-100 bg-gradient-to-r from-blue-900 to-blue-900">
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
                                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                                   >
                                        {navLists}
                                   </ul>
                              </div>

                              <p className="btn btn-ghost text-xl md:text-2xl text-white font-extrabold italic">
                                   RJ Tech
                              </p>
                         </div>
                         <div className="navbar-center hidden lg:flex">
                              <ul className="menu menu-horizontal px-1">
                                   {navLists}
                              </ul>
                         </div>

                         <div className="navbar-end">
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
                                                  <button className="">
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
                                                                 {
                                                                      user.displayName
                                                                 }
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
                                                                           Sign
                                                                           Up
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
          </div>
     );
};

export default Navbar;
