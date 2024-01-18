import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import myCreatedRouter from "./Routes/Routes";
import AuthProvider from "./Provider/AuthProvider";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
     <React.StrictMode>
          <HelmetProvider>
               <AuthProvider>
                    <RouterProvider router={myCreatedRouter} />
               </AuthProvider>
          </HelmetProvider>
     </React.StrictMode>
);
