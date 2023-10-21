import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/RegisterPage/Register";
import HomePage from "../Pages/HomePage/HomePage";
import Login from "../Pages/LoginPage/Login";
import AddProduct from "../Pages/AddProductPage/AddProduct";
import BrandDetails from "../Components/BrandDetails/BrandDetails";
import BrandDetailsPage from "../Pages/BrandDetailsPage/BrandDetailsPage";
import MyCart from "../Pages/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import UpdateProduct from "../Pages/AddProductPage/UpdateProduct";
import ContactUs from "../Pages/ContactUsPage/ContactUs";
import AboutUs from "../Pages/AboutUsPage/AboutUs";

const myCreatedRouter = createBrowserRouter([
     {
          path: "/",
          element: <Root></Root>,
          errorElement: <ErrorPage></ErrorPage>,
          children: [
               {
                    path: "/",
                    element: <HomePage></HomePage>,
                    loader: () => fetch("/brand.json"),
               },
               {
                    path: "/data/:brandName",
                    element: (
                         <PrivateRoute>
                              <BrandDetails></BrandDetails>
                         </PrivateRoute>
                    ),
                    loader: () =>
                    fetch(" https://techbd-server.vercel.app/products"),
               },
               {
                    path: "/details/:id",
                    element: <BrandDetailsPage></BrandDetailsPage>,
                    loader: ({ params }) =>
                         fetch(
                              ` https://techbd-server.vercel.app/products/${params.id}`
                         ),
               },
               {
                    path: "/updateProduct/:id",
                    element: <UpdateProduct></UpdateProduct>,
                    loader: ({ params }) =>
                         fetch(
                              ` https://techbd-server.vercel.app/products/${params.id}`
                         ),
               },
               {
                    path: "/addProduct",
                    element: (
                         <PrivateRoute>
                              <AddProduct></AddProduct>
                         </PrivateRoute>
                    ),
               },
               {
                    path: "/myCart",
                    element: <MyCart></MyCart>,
                    loader: () =>
                         fetch(" https://techbd-server.vercel.app/addCart"),
               },
               {
                    path: "/register",
                    element: <Register></Register>,
               },


               {
                    path: "/login",
                    element: <Login></Login>,
               },
               {
                    path: "/contact",
                    element: <ContactUs></ContactUs>,
               },
               {
                    path: "/about",
                    element: <AboutUs></AboutUs>,
               },
          ],
     },
]);
export default myCreatedRouter;
