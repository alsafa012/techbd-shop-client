import React, { createContext, useState } from "react";
import {
     GoogleAuthProvider,
     createUserWithEmailAndPassword,
     getAuth,
     signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
     const [loader, setLoader] = useState(true);
     const [user, setUser] = useState(null);
     // sign in with google account
     const googleSignIn = (value) => {
          setLoader(true);
          return signInWithPopup(auth, provider);
     };
     // create a new user
     const createUser = (email, password) => {
          setLoader(true);
          return createUserWithEmailAndPassword(auth, email, password);
     };

     const authInfo = {
          user,
          loader,
          googleSignIn,
          createUser,
     };
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;
