import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import { isLoggedIn } from "../routing/components/common";
import { useNavigate } from "react-router-dom";

const MainLayout = () => {
  const navigate = useNavigate();
  const [state, setState] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (isLoggedIn()) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Header state={state} setState={setState} />
      <Sidebar state={state} setState={setState} />
      <Outlet />
    </div>
  );
};

export default MainLayout;
