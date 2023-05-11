import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [state, setState] = React.useState<boolean>(false);

  return (
    <div>
      <Header state={state} setState={setState} />
      <Sidebar state={state} setState={setState} />
      <Outlet />
    </div>
  );
};

export default MainLayout;
