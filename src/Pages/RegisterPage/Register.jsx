import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Register = () => {
     const [showPassword, setShowPassword] = useState(false);

     // const { user,createUser , updateUserProfile } = useContext(AuthContext);

  /*    const [errorMessage, setErrorMessage] = useState("");

     const navigate = useNavigate();
     const handleRegister = (e) => {
          e.preventDefault();
          const form = new FormData(e.currentTarget);
          const name = form.get("name");
          const photo = form.get("photo");
          const email = form.get("email");
          const password = form.get("password");

          console.log("register", name, photo, email, password);

          // checking the password
          if (password.length < 6) {
               setErrorMessage("Please enter at least 6 character password");
               return;
          }
     
          else if((!/(?=.*[A-Z])/.test(password))){
               setErrorMessage("Password must contain at least one uppercase letter.")
               return;
          }else if(!/(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-])/.test(password)){
               setErrorMessage("Password must contain at least one special character.")
               return;
          }

          // create a new user
          if (user) {
               // toast.error("user already logged in");
               return;
          }
          createUser(email, password)
               
               .then((result) => {
                    // console.log(result.user);

                    // update profile

                    updateUserProfile(name,photo)
                    .then(() => {
                    // toast.success('Profile updated')
                    })

                    toast.success("user successfully sign-up");

                    navigate(location?.state ? location.state : "/");
               })
               .catch((error) => {
                    // console.error(error);
                    toast.error("something went wrong.please try again.");
               });
     }; */
     return (
          <div>
          <p className=" text-3xl font-bold mb-6 text-center text-[#fcb900]">
               Sign Up Page
          </p>

          <form
               // onSubmit={handleRegister}
               className="w-4/5 md:w-1/2 mx-auto"
          >
               <div className="form-control">
                    <label className="label">
                         <span className="label-text">Name</span>
                    </label>
                    <input
                         type="text"
                         name="name"
                         placeholder="Name"
                         className="input input-bordered"
                         required
                    />
               </div>
               <div className="form-control">
                    <label className="label">
                         <span className="label-text">Photo URL</span>
                    </label>
                    <input
                         type="text"
                         name="photo"
                         placeholder="Photo URL"
                         className="input input-bordered"
                         required
                    />
               </div>
               <div className="form-control">
                    <label className="label">
                         <span className="label-text">Email</span>
                    </label>
                    <input
                         type="text"
                         name="email"
                         placeholder="Email"
                         className="input input-bordered"
                         required
                    />
               </div>
               <div className="form-control relative">
                    <label className="label">
                         <span className="label-text">Password</span>
                    </label>
                    <input
                         type={showPassword ? "text" : "password"}
                         name="password"
                         placeholder="Password"
                         className="input input-bordered"
                         required
                    />

                    <span
                         className="text-xl absolute top-[60%] right-4"
                         // onClick={() => setShowPassword(!showPassword)}
                    >
                         {showPassword ? (
                              <FiEye> </FiEye>
                         ) : (
                              <FiEyeOff></FiEyeOff>
                         )}
                    </span>
               </div>
               <div className="form-control">
                    <div className="flex items-center gap-2 mt-2">
                         <input type="checkbox" name="terms" id="" required />
                         <p>
                              Please accept our
                              <a
                                   className="hover:underline hover:text-red-500"
                                   href="#"
                              >
                                   terms and conditions
                              </a>
                         </p>
                    </div>
               </div>
               {/* <h3>
                    {errorMessage && (
                         <p className="text-red-600 pt-1">
                              {errorMessage}
                         </p>
                    )}
               </h3> */}
               <div className="form-control mt-6">
                    <button className="btn text-white bg-[#ff6900]">
                         Sign Up
                    </button>
               </div>
          </form>
          <p className="text-center py-4">
               Already Have An Account ?
               <Link
                    className="text-green-500 font-bold hover:underline ml-1"
                    to="/login"
               >
                    Login
               </Link>
          </p>
     </div>
     );
};

export default Register;