import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Router";

const Navigation = () => {
  return <RouterProvider router={router} />;
};

export default Navigation;
