import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
                         to="/addCoffee"
                         className={({ isActive, isPending }) =>
                              isPending
                                   ? "pending"
                                   : isActive
                                   ? "text-[#ff6900] underline"
                                   : ""
                         }
                    >
                         addCoffee
                    </NavLink>
               </li>

               {/* <li>
               <NavLink
                    to="/updateCoffee"
                    className={({ isActive, isPending }) =>
                         isPending
                              ? "pending"
                              : isActive
                              ? "text-[#ff6900] underline"
                              : ""
                    }
               >
                    updateCoffee
               </NavLink>
          </li> */}

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
               <li>
                    <NavLink
                         to="/users"
                         className={({ isActive, isPending }) =>
                              isPending
                                   ? "pending"
                                   : isActive
                                   ? "text-[#ff6900] underline"
                                   : ""
                         }
                    >
                         Users
                    </NavLink>
               </li>
          </>
     );
     return (
          <div>
               <div>
                    <div className="navbar bg-base-100">
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

                              <p className="btn btn-ghost text-xl md:text-2xl text-[#fcb900] font-extrabold italic">
                                   RJ AGENCY
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
                                        <Link to="/login">
                                             <button className="">
                                                  Sign Up
                                             </button>
                                        </Link>
                                   </label>

                                   <div>
                                        <ul
                                             tabIndex={0}
                                             className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                                        >
                                             <div>
                                                  <li>
                                                       <button className="font-medium">
                                                            Sign Out
                                                       </button>

                                                       {/* <Link to="/login">
                                                       <button className="">
                                                            Sign Up
                                                       </button>
                                                  </Link>
                                                  <Link>
                                                       <button>
                                                            UpdateUser
                                                       </button>
                                                  </Link> */}
                                                  </li>
                                             </div>
                                        </ul>
                                   </div>
                              </div>
                              {/* {user && (
                         <div className="w-10 rounded-full">
                              <img
                                   className="rounded-full"
                                   src={user.photoURL}
                              />
                              <p>{user.email}</p>
                         </div>
                    )}
                    {user ? (
                         <button className="btn" onClick={handleSignOut}>
                              Sign Out
                         </button>
                    ) : (
                         <Link to="/login">
                              <button className="btn">Sign Up</button>
                         </Link>
                    )} */}
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;
