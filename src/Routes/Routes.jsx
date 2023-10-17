import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Register from '../Pages/RegisterPage/Register';
import HomePage from '../Pages/HomePage/HomePage';
import Login from '../Pages/LoginPage/Login';

const myCreatedRouter = createBrowserRouter([
     {
          path: "/",
          element: <Root></Root>,
          errorElement:<ErrorPage></ErrorPage>,
          children:[
               {
                    path: "/",
                    element:<HomePage></HomePage>
               },
               {
                    path: "/register",
                    element:<Register></Register>
               },
               {
                    path: "/login",
                    element:<Login></Login>
               },
          ]
     },
]);
export default myCreatedRouter;