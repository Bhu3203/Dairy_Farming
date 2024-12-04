import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Header from "./component/Header";
import LoginRegister from "./component/LoginRegister";
import Register from "./component/Register";
import App from "./App";
import Forgot_Password from "./component/Forgot_Password";

import Add_Milk_Record from "./component/Add_Milk_Record";
import Farmer_Registration from "./component/Farmer_Registration";
import AddUserDetails from "./component/AddUserDetails";

const customRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/header",
        element: <Header />,
      },
      {
        path: "/login",
        element: <LoginRegister />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/password",
        element: <Forgot_Password />,
      },
      {
        path: "/milk",
        element: <Add_Milk_Record />,
      },
      {
        path: "/farmer",
        element: <Farmer_Registration />,
      },
      {
        path: "/adduser",
        element: <AddUserDetails />,
      },
    ],
  },
]);

export default customRoute;
